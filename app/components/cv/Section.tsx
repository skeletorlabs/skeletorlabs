import { display, mono } from "@/app/lib/cv/fonts";

export default function Section({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: number;
  title: string;
  children: React.ReactNode;
}) {
  const headingId = `${id}-heading`;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="scroll-mt-20 border-t border-white/5 py-20 md:py-28 print:py-6 print:border-0"
    >
      <p
        className={`flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-violet-300 ${mono.className}`}
        aria-hidden="true"
      >
        <span className="h-px w-8 bg-violet-300/60" />
        {String(index).padStart(2, "0")}
      </p>
      <h2
        id={headingId}
        className={`mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-white print:text-3xl ${display.className}`}
      >
        {title}
        <span className="text-violet-400">.</span>
      </h2>
      <div className="mt-10 md:mt-14 print:mt-4">{children}</div>
    </section>
  );
}
