import type { Locale, YearMonth } from "@/app/lib/cv/types";
import type { UI } from "@/app/lib/cv/i18n";
import type { Project } from "@/app/lib/cv/github";
import { formatYearMonth, t } from "@/app/lib/cv/derive";
import { display, mono } from "@/app/lib/cv/fonts";
import Section from "./Section";

export default function Projects({
  projects,
  locale,
  ui,
  index,
}: {
  projects: Project[];
  locale: Locale;
  ui: UI;
  index: number;
}) {
  return (
    <Section id="projects" index={index} title={ui.sections.projects}>
      <p className="-mt-4 mb-10 max-w-2xl text-white/70 print:mt-0 print:mb-4">
        {ui.projectsIntro}{" "}
        <a
          href="/labs"
          className="text-violet-300 underline underline-offset-4 hover:text-violet-200 print:hidden"
        >
          {ui.projectsMore}
        </a>
      </p>

      <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 print:grid-cols-2">
        {projects.map((p) => (
          <li
            key={p.repo}
            className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-0.5 hover:border-violet-300/40 hover:bg-white/[0.05] print:break-inside-avoid print:p-3"
          >
            <div className="flex items-start justify-between gap-3">
              <h3
                className={`text-xl font-bold text-white break-all ${display.className}`}
              >
                {p.name}
              </h3>
              {p.language && (
                <span
                  className={`shrink-0 rounded-full border border-violet-300/30 px-2.5 py-0.5 text-[11px] text-violet-200 ${mono.className}`}
                >
                  {p.language}
                </span>
              )}
            </div>
            {p.description && (
              <p className="mt-3 text-sm text-white/70">
                {t(p.description, locale)}
              </p>
            )}
            {p.topics.length > 0 && (
              <ul className="mt-4 flex flex-wrap gap-1.5 print:hidden">
                {p.topics.map((topic) => (
                  <li
                    key={topic}
                    className={`rounded bg-violet-500/10 px-2 py-0.5 text-[11px] text-violet-200 ${mono.className}`}
                  >
                    {topic}
                  </li>
                ))}
              </ul>
            )}
            <div
              className={`mt-auto flex flex-wrap items-center gap-x-4 gap-y-1 pt-6 text-xs text-white/50 ${mono.className}`}
            >
              {p.stars !== undefined && p.stars > 0 && (
                <span>
                  ★ {p.stars} {ui.stars}
                </span>
              )}
              {p.pushedAt && (
                <span>
                  {ui.updated}{" "}
                  <time dateTime={p.pushedAt}>
                    {formatYearMonth(p.pushedAt.slice(0, 7) as YearMonth, locale)}
                  </time>
                </span>
              )}
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto text-violet-300 hover:text-violet-200"
              >
                {ui.viewOnGithub} <span aria-hidden="true">→</span>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
