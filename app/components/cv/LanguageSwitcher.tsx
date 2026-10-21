"use client";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import type { Locale } from "@/app/lib/cv/types";
import { Flag } from "./Flags";

const ROUTES: Record<Locale, { href: string; hrefLang: string }> = {
  en: { href: "/", hrefLang: "en" },
  pt: { href: "/pt", hrefLang: "pt-BR" },
};

export default function LanguageSwitcher({
  locale,
  label,
  names,
  className = "",
}: {
  locale: Locale;
  /** Accessible name of the menu, in the current language. */
  label: string;
  /** Language names in the current language, e.g. { en: "Inglês", pt: "Português" }. */
  names: Record<Locale, string>;
  className?: string;
}) {
  const locales = Object.keys(ROUTES) as Locale[];

  return (
    <Menu as="div" className={`relative ${className}`}>
      <MenuButton
        aria-label={`${label}: ${names[locale]}`}
        className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-white/80 transition hover:bg-white/10 hover:text-white focus:outline-none data-[focus]:ring-2 data-[focus]:ring-violet-300/60"
      >
        <Flag locale={locale} />
        <span className="hidden sm:inline">{names[locale]}</span>
        <svg
          viewBox="0 0 10 6"
          className="h-1.5 w-2.5 text-white/50"
          aria-hidden="true"
        >
          <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </MenuButton>

      <MenuItems
        anchor="bottom end"
        className="z-50 mt-2 min-w-[11rem] rounded-xl border border-white/10 bg-skeletor-dark-violet/95 p-1 shadow-2xl shadow-black/50 backdrop-blur-md focus:outline-none"
      >
        {locales.map((l) => (
          <MenuItem key={l}>
            <a
              href={ROUTES[l].href}
              hrefLang={ROUTES[l].hrefLang}
              aria-current={l === locale ? "page" : undefined}
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm normal-case tracking-normal text-white/80 data-[focus]:bg-white/10 data-[focus]:text-white"
            >
              <Flag locale={l} />
              <span className="flex-1">{names[l]}</span>
              {l === locale && (
                <svg viewBox="0 0 12 10" className="h-2.5 w-3 text-violet-300" aria-hidden="true">
                  <path d="M1 5l3.5 3.5L11 1" fill="none" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              )}
            </a>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
}
