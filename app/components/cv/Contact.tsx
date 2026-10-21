import type { CV, Locale } from "@/app/lib/cv/types";
import type { UI } from "@/app/lib/cv/i18n";
import { t } from "@/app/lib/cv/derive";
import { mono } from "@/app/lib/cv/fonts";
import Section from "./Section";

const LABELS = { email: "E-mail", linkedin: "LinkedIn", github: "GitHub" };

export default function Contact({
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
  return (
    <Section id="contact" index={index} title={ui.sections.contact}>
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p
            className={`inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-xs uppercase tracking-[0.15em] text-emerald-300 print:border-0 print:p-0 ${mono.className}`}
          >
            <span
              className="h-1.5 w-1.5 rounded-full bg-emerald-400 print:hidden"
              aria-hidden="true"
            />
            {t(cv.availability, locale)}
          </p>
        </div>

        <dl className="divide-y divide-white/10 border-y border-white/10 print:border-0">
          {cv.links.map((link) => (
            <div
              key={link.kind}
              className="flex flex-col gap-1 py-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <dt
                className={`text-xs uppercase tracking-[0.2em] text-white/50 ${mono.className}`}
              >
                {LABELS[link.kind]}
              </dt>
              <dd>
                <a
                  href={link.href}
                  className="break-all text-lg text-white transition hover:text-violet-300"
                  {...(link.kind === "email"
                    ? {}
                    : { target: "_blank", rel: "noopener noreferrer" })}
                >
                  {link.label}
                </a>
              </dd>
            </div>
          ))}
          <div className="flex flex-col gap-1 py-5 sm:flex-row sm:items-center sm:justify-between">
            <dt
              className={`text-xs uppercase tracking-[0.2em] text-white/50 ${mono.className}`}
            >
              {ui.location}
            </dt>
            <dd className="text-lg text-white">{t(cv.location, locale)}</dd>
          </div>
        </dl>
      </div>
    </Section>
  );
}
