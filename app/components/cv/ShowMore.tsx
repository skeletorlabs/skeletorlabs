"use client";

import { useId, useState } from "react";

/**
 * Hides its children on screen until expanded. The content is always in the HTML,
 * and it always prints.
 */
export default function ShowMore({
  count,
  moreLabel,
  lessLabel,
  className = "",
  children,
}: {
  count: number;
  moreLabel: string;
  lessLabel: string;
  className?: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <>
      <div id={id} className={open ? "" : "hidden print:block"}>
        {children}
      </div>
      <div className="mt-8 flex justify-center print:hidden">
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen((v) => !v)}
          className={`inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-xs uppercase tracking-[0.15em] text-white transition hover:border-violet-300/60 hover:bg-white/5 ${className}`}
        >
          {open ? lessLabel : `${moreLabel} (${count})`}
          <svg
            viewBox="0 0 10 6"
            className={`h-1.5 w-2.5 transition ${open ? "rotate-180" : ""}`}
            aria-hidden="true"
          >
            <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </div>
    </>
  );
}
