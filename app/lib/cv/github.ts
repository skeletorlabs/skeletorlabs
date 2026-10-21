import "server-only";
import type { ProjectsConfig, Text } from "./types";

/**
 * Reads public repo metadata from the GitHub REST API.
 * Only metadata is used; no code from these repos is fetched or run.
 */

export const GITHUB_REVALIDATE_SECONDS = 3600;

export interface Project {
  repo: string;
  name: string;
  url: string;
  description?: Text;
  stars?: number;
  language?: string;
  topics: string[];
  pushedAt?: string;
}

interface GithubRepo {
  full_name: string;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
  topics?: string[];
  pushed_at: string | null;
  fork: boolean;
  archived: boolean;
  private: boolean;
}

async function github<T>(path: string): Promise<T | null> {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  const token = process.env.GITHUB_TOKEN;
  if (token) headers.Authorization = `Bearer ${token}`;

  try {
    const res = await fetch(`https://api.github.com${path}`, {
      headers,
      next: { revalidate: GITHUB_REVALIDATE_SECONDS },
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) {
      console.warn(`[cv] GitHub ${path} responded ${res.status}`);
      return null;
    }
    return (await res.json()) as T;
  } catch (error) {
    console.warn(`[cv] GitHub ${path} failed`, error);
    return null;
  }
}

function key(repo: string): string {
  return repo.toLowerCase();
}

function fromConfigOnly(config: ProjectsConfig): Project[] {
  const excluded = new Set(config.exclude.map(key));
  return config.items
    .filter((item) => !excluded.has(key(item.repo)))
    .map((item) => ({
      repo: item.repo,
      name: item.repo.split("/")[1] ?? item.repo,
      url: `https://github.com/${item.repo}`,
      description: item.description,
      topics: [],
    }));
}

export async function getProjects(config: ProjectsConfig): Promise<Project[]> {
  const ownerRepos = await github<GithubRepo[]>(
    `/users/${encodeURIComponent(config.owner)}/repos?type=owner&per_page=100&sort=pushed`,
  );
  if (!Array.isArray(ownerRepos)) return fromConfigOnly(config);

  const byName = new Map(ownerRepos.map((r) => [key(r.full_name), r]));

  // Listed repos from other accounts are fetched one by one.
  const others = config.items.filter((item) => !byName.has(key(item.repo)));
  const fetched = await Promise.all(
    others.map((item) =>
      item.repo.split("/")[0].toLowerCase() === config.owner.toLowerCase()
        ? null
        : github<GithubRepo>(`/repos/${item.repo}`),
    ),
  );
  for (const repo of fetched) {
    if (repo) byName.set(key(repo.full_name), repo);
  }

  const overrides = new Map(config.items.map((i) => [key(i.repo), i]));
  const wanted = config.includeAllPublic
    ? Array.from(byName.keys())
    : config.items.map((i) => key(i.repo));
  const excluded = new Set(config.exclude.map(key));

  const projects: Project[] = [];
  for (const name of Array.from(new Set(wanted))) {
    const repo = byName.get(name);
    if (!repo || repo.private || repo.fork || repo.archived) continue;
    if (excluded.has(name)) continue;
    if (config.requireTopics && !repo.topics?.length) continue;
    projects.push({
      repo: repo.full_name,
      name: repo.name,
      url: repo.html_url,
      description:
        overrides.get(name)?.description ?? repo.description ?? undefined,
      stars: repo.stargazers_count,
      language: repo.language ?? undefined,
      topics: repo.topics ?? [],
      pushedAt: repo.pushed_at ?? undefined,
    });
  }

  return projects.sort((a, b) =>
    (b.pushedAt ?? "").localeCompare(a.pushedAt ?? ""),
  );
}
