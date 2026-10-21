import type { CV, Locale } from "@/app/lib/cv/types";
import { t } from "@/app/lib/cv/derive";
import { mono } from "@/app/lib/cv/fonts";

/** Decorative ticker of stack items. The Stack section has the real list. */
export default function Marquee({ cv, locale }: { cv: CV; locale: Locale }) {
  const items = Array.from(
    new Set(
      cv.stack.flatMap((g) =>
        g.items.map((i) => t(i, locale)).filter((i) => i.length <= 20),
      ),
    ),
  );

  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden border-y border-white/5 py-5 print:hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
    >
      <div className="flex w-max animate-infinite-scroll-slow motion-reduce:animate-none">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            className={`flex shrink-0 items-center gap-10 pr-10 text-sm uppercase tracking-[0.2em] text-white/50 ${mono.className}`}
          >
            {items.map((item) => (
              <li key={item} className="flex items-center gap-10">
                {item}
                <span className="text-violet-400">✦</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
