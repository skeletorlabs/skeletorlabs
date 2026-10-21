export type Locale = "en" | "pt";

/** Plain string (same in every locale) or one string per locale. */
export type Text = string | Record<Locale, string>;

/** Year and month, e.g. "2025-08". */
export type YearMonth = `${number}-${number}`;

export type LinkKind = "email" | "linkedin" | "github";

export interface ContactLink {
  kind: LinkKind;
  label: string;
  href: string;
}

export interface Role {
  company: string;
  title: Text;
  location?: Text;
  start: YearMonth;
  /** null means current role. */
  end: YearMonth | null;
  /** Counts toward the "years in Web3" counter. */
  web3?: boolean;
  /** Paragraphs shown before the bullet list. */
  summary?: Text[];
  /** Line introducing the bullet list. */
  highlightsIntro?: Text;
  highlights: Text[];
  /** Paragraphs shown after the bullet list. */
  outro?: Text[];
  /** Technologies and skills used in the role. */
  tags?: Text[];
}

export type StackIcon = "frontend" | "backend" | "web3" | "management";

export interface StackGroup {
  title: Text;
  /** Picks the card icon and accent color. */
  icon?: StackIcon;
  items: Text[];
}

export interface Education {
  institution: string;
  degree: Text;
  startYear: number;
  endYear: number;
}

export interface SpokenLanguage {
  name: Text;
  level: Text;
}

export interface ProjectEntry {
  /** "owner/repo" */
  repo: string;
  /** Overrides the GitHub description when set. */
  description?: Text;
}

/** A project added by hand (not from GitHub). Shown before the repos. */
export interface FeaturedProject {
  name: string;
  year?: number;
  description: Text;
  url: string;
  tags?: Text[];
}

export interface ProjectsConfig {
  /** Hand-written project cards, shown first. */
  featured?: FeaturedProject[];
  /** GitHub account whose public repos are listed. */
  owner: string;
  /** Also show public repos of `owner` that are not in `items`. */
  includeAllPublic: boolean;
  /** Hide repos that have no GitHub topics. */
  requireTopics: boolean;
  /** "owner/repo" entries that never show up. */
  exclude: string[];
  /** Known repos. Rendered alone when the GitHub API is unavailable. */
  items: ProjectEntry[];
}

export interface CV {
  name: string;
  /** Square image under /public, shown as a circle in the Hero. */
  photo?: { src: string; alt: Text };
  /** Up to 4 chips floating around the photo. Defaults to the first item of each stack group. */
  heroChips?: Text[];
  headline: Text;
  location: Text;
  availability: Text;
  siteUrl: string;
  links: ContactLink[];
  about: {
    /**
     * Placeholders filled from the experience dates, so the text never drifts from
     * the counters: {years}, {web3Years} (digits) and {web3YearsWord} ("five" / "cinco").
     */
    paragraphs: Text[];
    highlightsIntro?: Text;
    highlights?: Text[];
  };
  education: Education[];
  certifications: Text[];
  languages: SpokenLanguage[];
  stack: StackGroup[];
  experience: Role[];
  projects: ProjectsConfig;
}
