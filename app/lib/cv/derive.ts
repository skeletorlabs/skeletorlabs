import type { Locale, Role, Text, YearMonth } from "./types";

export function t(text: Text, locale: Locale): string {
  return typeof text === "string" ? text : text[locale];
}

const MONTHS: Record<Locale, string[]> = {
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  pt: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
};

function parse(ym: YearMonth): { year: number; month: number } {
  const [year, month] = ym.split("-").map(Number);
  return { year, month };
}

/** Absolute month index, so ranges can be compared and merged. */
function toIndex(ym: YearMonth): number {
  const { year, month } = parse(ym);
  return year * 12 + (month - 1);
}

function nowIndex(now: Date): number {
  return now.getFullYear() * 12 + now.getMonth();
}

export function formatYearMonth(ym: YearMonth, locale: Locale): string {
  const { year, month } = parse(ym);
  return `${MONTHS[locale][month - 1]} ${year}`;
}

export function formatRange(role: Role, locale: Locale): string {
  const end = role.end
    ? formatYearMonth(role.end, locale)
    : locale === "pt"
      ? "Atual"
      : "Present";
  return `${formatYearMonth(role.start, locale)} – ${end}`;
}

/** Length of one role, both months inclusive, e.g. "1 yr 2 mos" / "1 ano e 2 meses". */
export function formatDuration(role: Role, locale: Locale, now = new Date()): string {
  const end = role.end ? toIndex(role.end) : nowIndex(now);
  const months = end - toIndex(role.start) + 1;
  const y = Math.floor(months / 12);
  const m = months % 12;
  const parts =
    locale === "pt"
      ? [y && `${y} ${y === 1 ? "ano" : "anos"}`, m && `${m} ${m === 1 ? "mês" : "meses"}`]
      : [y && `${y} ${y === 1 ? "yr" : "yrs"}`, m && `${m} ${m === 1 ? "mo" : "mos"}`];
  return parts.filter(Boolean).join(locale === "pt" ? " e " : " ");
}

/**
 * Total months covered by the roles, counting overlapping periods once.
 * Both start and end months are inclusive.
 */
export function coveredMonths(roles: Role[], now = new Date()): number {
  const ranges = roles
    .map((r) => [toIndex(r.start), r.end ? toIndex(r.end) : nowIndex(now)])
    .sort((a, b) => a[0] - b[0]);

  let total = 0;
  let current: number[] | null = null;
  for (const [start, end] of ranges) {
    if (current && start <= current[1] + 1) {
      current[1] = Math.max(current[1], end);
    } else {
      if (current) total += current[1] - current[0] + 1;
      current = [start, end];
    }
  }
  if (current) total += current[1] - current[0] + 1;
  return total;
}

/** Rounded to the nearest year, so 4 years and 9 months shows as 5. */
export function yearsOfExperience(roles: Role[], now = new Date()): number {
  return Math.round(coveredMonths(roles, now) / 12);
}

export function yearsInWeb3(roles: Role[], now = new Date()): number {
  return yearsOfExperience(
    roles.filter((r) => r.web3),
    now,
  );
}

const NUMBER_WORDS: Record<Locale, string[]> = {
  en: ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
    "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"],
  pt: ["zero", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez",
    "onze", "doze", "treze", "catorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove", "vinte"],
};

/** Fills {years}, {web3Years} and {web3YearsWord} from the experience dates. */
export function fillCounters(text: string, roles: Role[], locale: Locale): string {
  const years = yearsOfExperience(roles);
  const web3 = yearsInWeb3(roles);
  return text
    .replaceAll("{years}", String(years))
    .replaceAll("{web3Years}", String(web3))
    .replaceAll("{web3YearsWord}", NUMBER_WORDS[locale][web3] ?? String(web3));
}
