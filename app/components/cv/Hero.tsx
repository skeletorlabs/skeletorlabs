import Image from "next/image";
import type { CV, Locale } from "@/app/lib/cv/types";
import type { UI } from "@/app/lib/cv/i18n";
import { t, yearsInWeb3, yearsOfExperience } from "@/app/lib/cv/derive";
import { display, mono } from "@/app/lib/cv/fonts";

const GRADIENT =
  "bg-gradient-to-br from-[#9C74F1] via-[#987FFF] to-[#3600A8] bg-clip-text text-transparent print:text-slate-900";

const CHIP_POSITIONS = [
  "top-[8%] -right-4",
  "top-[42%] -left-10",
  "bottom-[10%] -left-2",
  "bottom-[30%] -right-12",
];

/** One bullet color per chip, in the same order as CHIP_POSITIONS. */
const CHIP_COLORS = [
  "bg-cyan-400 shadow-[0_0_8px] shadow-cyan-400/70",
  "bg-emerald-400 shadow-[0_0_8px] shadow-emerald-400/70",
  "bg-amber-400 shadow-[0_0_8px] shadow-amber-400/70",
  "bg-fuchsia-400 shadow-[0_0_8px] shadow-fuchsia-400/70",
];

/** Chips from cv.heroChips, or the first short item of each stack group. */
function chipItems(cv: CV, locale: Locale): string[] {
  const items = cv.heroChips
    ? cv.heroChips.map((c) => t(c, locale))
    : cv.stack
        .map((g) => g.items.map((i) => t(i, locale)).find((i) => i.length <= 14))
        .filter((i): i is string => Boolean(i));
  return items.slice(0, CHIP_POSITIONS.length);
}

export default function Hero({
  cv,
  locale,
  ui,
}: {
  cv: CV;
  locale: Locale;
  ui: UI;
}) {
  const [firstName, ...rest] = cv.name.split(" ");
  const [role, ...focus] = t(cv.headline, locale).split(" | ");
  const counters = [
    { value: yearsOfExperience(cv.experience), unit: ui.yearsUnit, label: ui.yearsExperience },
    { value: yearsInWeb3(cv.experience), unit: ui.yearsUnit, label: ui.yearsWeb3 },
    { value: cv.experience.length, unit: "", label: ui.roles },
  ];

  return (
    <header
      id="top"
      className="relative flex min-h-[calc(100svh-4rem)] items-center py-16 print:min-h-0 print:py-0"
    >
      <div className="grid w-full items-center gap-16 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <p
            className={`flex flex-wrap items-center gap-x-3 gap-y-2 text-xs uppercase tracking-[0.25em] text-violet-300 ${mono.className}`}
          >
            <span className="h-px w-8 bg-violet-300/60" aria-hidden="true" />
            <span>{t(cv.location, locale)}</span>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-2 whitespace-nowrap text-[10px] tracking-normal text-emerald-300 sm:text-xs sm:tracking-[0.25em] print:text-emerald-800">
              <span
                className="h-1.5 w-1.5 rounded-full bg-emerald-400 print:hidden"
                aria-hidden="true"
              />
              {t(cv.availability, locale)}
            </span>
          </p>

          <h1
            className={`mt-6 text-6xl sm:text-7xl lg:text-8xl font-extrabold leading-[0.95] tracking-tight text-white print:text-5xl ${display.className}`}
          >
            <span className="block">{firstName}</span>
            <span className={`block pb-2 ${GRADIENT}`}>{rest.join(" ")}</span>
          </h1>

          <p
            className={`mt-6 text-lg md:text-xl text-white/80 ${mono.className}`}
          >
            {role}
            {focus.length > 0 && (
              <>
                {" "}
                <span className="text-violet-300">/</span>{" "}
                <span className="text-violet-200">{focus.join(" | ")}</span>
              </>
            )}
          </p>

          <div className="mt-10 flex flex-wrap gap-3 print:hidden">
            <a
              href="#projects"
              className={`rounded-full bg-violet-300 px-7 py-3.5 text-xs uppercase tracking-[0.15em] text-black/80 shadow-lg shadow-violet-500/20 transition hover:bg-violet-200 ${mono.className}`}
            >
              {ui.viewProjects}
            </a>
            <a
              href="#contact"
              className={`rounded-full border border-white/15 px-7 py-3.5 text-xs uppercase tracking-[0.15em] text-white transition hover:border-violet-300/60 hover:bg-white/5 ${mono.className}`}
            >
              {ui.getInTouch}
            </a>
          </div>

          <ul className="mt-6 hidden flex-wrap gap-x-6 gap-y-1 text-sm print:flex">
            {cv.links.map((link) => (
              <li key={link.kind}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto flex w-full max-w-sm flex-col items-center gap-10 print:hidden">
          <div className="relative w-64 sm:w-72 lg:w-80">
            <div className="aspect-square rounded-full bg-gradient-to-br from-[#9C74F1] via-violet-400/30 to-[#3600A8] p-1 shadow-2xl shadow-violet-900/50">
              {cv.photo ? (
                <div className="h-full w-full overflow-hidden rounded-full bg-[radial-gradient(ellipse_at_50%_32%,rgba(139,92,246,0.22)_0%,rgba(139,92,246,0.08)_38%,transparent_65%),linear-gradient(to_bottom,#222338,#0D0919)]">
                  <Image
                    src={cv.photo.src}
                    alt={t(cv.photo.alt, locale)}
                    width={1010}
                    height={876}
                    quality={90}
                    priority
                    sizes="(min-width: 1024px) 320px, (min-width: 640px) 288px, 256px"
                    className="h-full w-full rounded-full object-cover object-[62%_50%]"
                  />
                </div>
              ) : (
                <div className="h-full w-full rounded-full bg-skeletor-dark-violet" />
              )}
            </div>
            {chipItems(cv, locale).map((chip, i) => (
              <span
                key={chip}
                aria-hidden="true"
                className={`absolute hidden items-center gap-2 rounded-full border border-white/10 bg-skeletor-gray/90 px-3 py-1.5 text-xs text-violet-200 shadow-lg backdrop-blur sm:inline-flex ${CHIP_POSITIONS[i]} ${mono.className}`}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${CHIP_COLORS[i]}`} />
                {chip}
              </span>
            ))}
          </div>

          <dl className="grid w-full grid-cols-3 gap-4 rounded-2xl border border-white/10 bg-skeletor-dark-violet/80 px-4 py-5 text-center backdrop-blur">
            {counters.map((c) => (
              <div key={c.label} className="flex flex-col-reverse justify-end">
                <dt
                  className={`mt-1 text-[10px] uppercase leading-tight tracking-[0.15em] text-white/60 ${mono.className}`}
                >
                  {c.label}
                </dt>
                <dd
                  className={`text-3xl font-extrabold ${GRADIENT} ${display.className}`}
                >
                  {c.value}
                  {c.unit && <span className="ml-0.5 text-xl">{c.unit}</span>}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <a
        href="#about"
        className={`absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/40 hover:text-white/70 md:flex print:hidden ${mono.className}`}
      >
        {ui.scroll}
        <span className="h-8 w-px bg-gradient-to-b from-violet-300 to-transparent" />
      </a>
    </header>
  );
}
