import { Blocks, MonitorSmartphone, Server, Users } from "lucide-react";
import type { CV, Locale, StackIcon } from "@/app/lib/cv/types";
import type { UI } from "@/app/lib/cv/i18n";
import { t } from "@/app/lib/cv/derive";
import { display, mono } from "@/app/lib/cv/fonts";
import Section from "./Section";

/** Full class strings so Tailwind keeps them in the build. */
const ACCENTS: Record<
  StackIcon,
  { Icon: typeof Server; icon: string; line: string; glow: string; border: string; dot: string }
> = {
  frontend: {
    Icon: MonitorSmartphone,
    icon: "bg-cyan-400/10 text-cyan-300 ring-cyan-400/30",
    line: "via-cyan-400/70",
    glow: "bg-cyan-500/20",
    border: "hover:border-cyan-400/40",
    dot: "bg-cyan-400",
  },
  backend: {
    Icon: Server,
    icon: "bg-emerald-400/10 text-emerald-300 ring-emerald-400/30",
    line: "via-emerald-400/70",
    glow: "bg-emerald-500/20",
    border: "hover:border-emerald-400/40",
    dot: "bg-emerald-400",
  },
  web3: {
    Icon: Blocks,
    icon: "bg-violet-400/10 text-violet-300 ring-violet-400/30",
    line: "via-violet-400/70",
    glow: "bg-violet-500/25",
    border: "hover:border-violet-400/40",
    dot: "bg-violet-400",
  },
  management: {
    Icon: Users,
    icon: "bg-amber-400/10 text-amber-300 ring-amber-400/30",
    line: "via-amber-400/70",
    glow: "bg-amber-500/20",
    border: "hover:border-amber-400/40",
    dot: "bg-amber-400",
  },
};

export default function Stack({
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
    <Section id="stack" index={index} title={ui.sections.stack}>
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4 print:grid-cols-4">
        {cv.stack.map((group, i) => {
          const accent = ACCENTS[group.icon ?? "web3"];
          const { Icon } = accent;
          return (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.01] p-6 transition duration-300 hover:-translate-y-1 ${accent.border} print:border-0 print:p-0`}
            >
              <span
                aria-hidden="true"
                className={`absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent ${accent.line} to-transparent print:hidden`}
              />
              <span
                aria-hidden="true"
                className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full blur-3xl opacity-50 transition duration-300 group-hover:opacity-100 ${accent.glow} print:hidden`}
              />

              <div className="relative flex items-start justify-between">
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ring-1 ${accent.icon} print:hidden`}
                  aria-hidden="true"
                >
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <span
                  className={`text-xs text-white/30 ${mono.className} print:hidden`}
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h3
                className={`relative mt-5 text-xl font-bold text-white ${display.className}`}
              >
                {t(group.title, locale)}
              </h3>

              <ul className="relative mt-5 flex flex-wrap gap-2">
                {group.items.map((item, j) => (
                  <li
                    key={j}
                    className="inline-flex items-start gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-[13px] leading-snug text-white/80 transition group-hover:border-white/15 print:border-0 print:p-0 print:pr-2"
                  >
                    <span
                      aria-hidden="true"
                      className={`mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full ${accent.dot} print:hidden`}
                    />
                    {t(item, locale)}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
