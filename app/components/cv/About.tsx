import type { CV, Locale } from "@/app/lib/cv/types";
import type { UI } from "@/app/lib/cv/i18n";
import { fillCounters, t } from "@/app/lib/cv/derive";
import { display, mono } from "@/app/lib/cv/fonts";
import Section from "./Section";

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 print:break-inside-avoid print:p-0 print:border-0">
      <h3
        className={`text-xs uppercase tracking-[0.2em] text-violet-300 ${mono.className}`}
      >
        {title}
      </h3>
      <div className="mt-4 text-sm text-white/80">{children}</div>
    </div>
  );
}

export default function About({
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
  const { about } = cv;
  const [lead, ...paragraphs] = about.paragraphs;

  return (
    <Section id="about" index={index} title={ui.sections.about}>
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] print:block">
        <div className="space-y-5 leading-relaxed text-white/70">
          {lead && (
            <p
              className={`text-xl md:text-2xl font-semibold leading-snug text-white ${display.className}`}
            >
              {fillCounters(t(lead, locale), cv.experience, locale)}
            </p>
          )}
          {paragraphs.map((p, i) => (
            <p key={i}>{fillCounters(t(p, locale), cv.experience, locale)}</p>
          ))}
          {about.highlightsIntro && (
            <p className="pt-2 text-white/80">{t(about.highlightsIntro, locale)}</p>
          )}
          {about.highlights && about.highlights.length > 0 && (
            <ul className="space-y-2">
              {about.highlights.map((h, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-2.5 h-1 w-3 shrink-0 bg-violet-400" aria-hidden="true" />
                  {t(h, locale)}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="space-y-4 print:mt-6 print:grid print:grid-cols-3 print:gap-6 print:space-y-0">
          <Card title={ui.education}>
            <ul className="space-y-3">
              {cv.education.map((e) => (
                <li key={e.institution}>
                  <span className="block text-white">{t(e.degree, locale)}</span>
                  <span className="block text-white/60">
                    {e.institution}, {e.startYear}–{e.endYear}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
          <Card title={ui.certifications}>
            <ul className="space-y-1.5">
              {cv.certifications.map((c, i) => (
                <li key={i}>{t(c, locale)}</li>
              ))}
            </ul>
          </Card>
          <Card title={ui.languages}>
            <ul className="space-y-1.5">
              {cv.languages.map((l, i) => (
                <li key={i}>
                  <span className="text-white">{t(l.name, locale)}</span>
                  <span className="text-white/60">: {t(l.level, locale)}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </Section>
  );
}
