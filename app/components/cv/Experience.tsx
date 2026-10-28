import type { CV, Locale, Role } from "@/app/lib/cv/types";
import type { UI } from "@/app/lib/cv/i18n";
import { formatDuration, formatRange, t } from "@/app/lib/cv/derive";
import { display, mono } from "@/app/lib/cv/fonts";
import Section from "./Section";
import ShowMore from "./ShowMore";

/** Roles shown before "Show more". */
const VISIBLE = 5;
const LIST =
  "divide-y divide-white/10 border-t border-white/10 print:border-0 print:divide-y-0";

export default function Experience({
  cv,
  locale,
  ui,
  index,
}: {
  cv: CV;
  locale: Locale;
  ui: UI;
  index: number;
}) {
  const recent = cv.experience.slice(0, VISIBLE);
  const older = cv.experience.slice(VISIBLE);

  const renderRole = (role: Role) => (
    <li
      key={`${role.company}-${role.start}`}
      className="grid gap-4 py-10 md:grid-cols-[220px_1fr] md:gap-10 print:py-4 print:break-inside-avoid"
    >
      <div className={`text-sm md:pt-1.5 ${mono.className}`}>
        <p className="text-violet-300">
          <time dateTime={role.start}>{formatRange(role, locale)}</time>
        </p>
        <p className="mt-1 text-xs text-white/50">
          {formatDuration(role, locale)}
        </p>
      </div>
      <div>
        <h3
          className={`text-2xl font-bold text-white print:text-lg ${display.className}`}
        >
          {t(role.title, locale)}
        </h3>
        <p className="mt-1 text-violet-200">
          {role.company}
          {role.location && (
            <span className="text-white/50">
              {" "}
              · {t(role.location, locale)}
            </span>
          )}
        </p>

        {role.summary?.map((p, i) => (
          <p key={i} className="mt-4 leading-relaxed text-white/70">
            {t(p, locale)}
          </p>
        ))}
        {role.highlightsIntro && (
          <p className="mt-4 text-white/80">{t(role.highlightsIntro, locale)}</p>
        )}
        {role.highlights.length > 0 && (
          <ul
            className={`space-y-2 text-white/70 ${role.highlightsIntro ? "mt-3" : "mt-5"}`}
          >
            {role.highlights.map((h, i) => (
              <li key={i} className="flex gap-3">
                <span
                  className="mt-2.5 h-1 w-3 shrink-0 bg-violet-400/70"
                  aria-hidden="true"
                />
                {t(h, locale)}
              </li>
            ))}
          </ul>
        )}
        {role.outro?.map((p, i) => (
          <p key={i} className="mt-4 leading-relaxed text-white/70">
            {t(p, locale)}
          </p>
        ))}

        {role.tags && role.tags.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-1.5">
            {role.tags.map((tag, i) => (
              <li
                key={i}
                className={`rounded-md border border-violet-300/20 bg-violet-500/10 px-2 py-0.5 text-[11px] text-violet-200 print:border-0 print:bg-transparent print:p-0 print:pr-2 ${mono.className}`}
              >
                {t(tag, locale)}
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );

  return (
    <Section id="experience" index={index} title={ui.sections.experience}>
      <ol className={LIST}>{recent.map(renderRole)}</ol>
      {older.length > 0 && (
        <ShowMore
          count={older.length}
          moreLabel={ui.showMore}
          lessLabel={ui.showLess}
          className={mono.className}
        >
          <ol start={VISIBLE + 1} className={LIST}>
            {older.map(renderRole)}
          </ol>
        </ShowMore>
      )}
    </Section>
  );
}
