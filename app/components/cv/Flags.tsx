import type { Locale } from "@/app/lib/cv/types";

function FlagUS() {
  return (
    <svg viewBox="0 0 19 10" className="h-full w-full" aria-hidden="true">
      <rect width="19" height="10" fill="#b22234" />
      {[1, 3, 5, 7, 9].map((y) => (
        <rect key={y} y={(y * 10) / 13} width="19" height={10 / 13} fill="#fff" />
      ))}
      <rect width="7.6" height={(7 * 10) / 13} fill="#3c3b6e" />
    </svg>
  );
}

function FlagBR() {
  return (
    <svg viewBox="0 0 20 14" className="h-full w-full" aria-hidden="true">
      <rect width="20" height="14" fill="#009c3b" />
      <path d="M10 1.6 18.2 7 10 12.4 1.8 7z" fill="#ffdf00" />
      <circle cx="10" cy="7" r="3.4" fill="#002776" />
    </svg>
  );
}

export function Flag({ locale }: { locale: Locale }) {
  return (
    <span className="inline-block h-3.5 w-5 shrink-0 overflow-hidden rounded-[3px] ring-1 ring-white/20">
      {locale === "en" ? <FlagUS /> : <FlagBR />}
    </span>
  );
}
