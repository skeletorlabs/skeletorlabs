import { cv } from "@/app/data/cv";
import { ui as dictionary } from "@/app/lib/cv/i18n";
import { getProjects } from "@/app/lib/cv/github";
import { display, mono } from "@/app/lib/cv/fonts";
import type { Locale } from "@/app/lib/cv/types";
import Hero from "./Hero";
import Marquee from "./Marquee";
import About from "./About";
import Stack from "./Stack";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import LanguageSwitcher from "./LanguageSwitcher";

const CONTAINER = "mx-auto w-full xl:w-[1280px] px-5 md:px-10 xl:px-14";

export default async function CvPage({ locale }: { locale: Locale }) {
  const ui = dictionary[locale];
  const projects = await getProjects(cv.projects);
  const initials = cv.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  const nav = [
    { id: "about", label: ui.sections.about },
    { id: "stack", label: ui.sections.stack },
    { id: "experience", label: ui.sections.experience },
    { id: "projects", label: ui.sections.projects },
    { id: "contact", label: ui.sections.contact },
  ];

  return (
    <div
      lang={ui.htmlLang}
      className="cv relative min-h-screen w-full overflow-x-clip bg-black/70 text-white print:bg-white"
    >
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-skeletor-dark-violet focus:px-3 focus:py-2 focus:text-white"
      >
        {ui.skipToContent}
      </a>

      {/* Background glows, same palette as the Labs page. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[1100px] overflow-hidden print:hidden"
      >
        <div className="absolute -left-40 -top-32 h-[600px] w-[600px] rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute right-[-180px] top-[280px] h-[520px] w-[520px] rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute left-1/3 top-[620px] h-[380px] w-[380px] rounded-full bg-violet-700/20 blur-3xl" />
      </div>

      <div className="sticky top-0 z-40 border-b border-white/5 bg-skeletor-dark-violet/70 backdrop-blur-md print:hidden">
        <div className={`${CONTAINER} flex h-16 items-center gap-6`}>
          <a
            href="#top"
            className={`text-lg font-extrabold tracking-tight text-white ${display.className}`}
          >
            {initials}
            <span className="text-violet-400">.</span>
          </a>
          <nav aria-label={ui.navLabel} className="ml-auto hidden md:block">
            <ol
              className={`flex gap-8 text-[11px] uppercase tracking-[0.2em] ${mono.className}`}
            >
              {nav.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-white/60 transition hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <div
            className={`ml-auto flex items-center gap-4 text-[11px] uppercase tracking-[0.15em] md:ml-4 ${mono.className}`}
          >
            <LanguageSwitcher
              locale={locale}
              label={ui.languageLabel}
              names={ui.languageNames}
            />
            <a
              href="/labs"
              className="rounded-full border border-violet-300/30 bg-white/5 px-4 py-2 text-violet-200 transition hover:bg-white/10"
            >
              Skeletor Labs
            </a>
          </div>
        </div>
      </div>

      <main id="content" className="relative">
        <div className={CONTAINER}>
          <Hero cv={cv} locale={locale} ui={ui} />
        </div>
        <Marquee cv={cv} locale={locale} />
        <div className={CONTAINER}>
          <About cv={cv} locale={locale} ui={ui} index={1} />
          <Stack cv={cv} locale={locale} ui={ui} index={2} />
          <Experience cv={cv} locale={locale} ui={ui} index={3} />
          <Projects projects={projects} locale={locale} ui={ui} index={4} />
          <Contact cv={cv} locale={locale} ui={ui} index={5} />
        </div>
      </main>

      <footer className="border-t border-white/5 print:hidden">
        <div
          className={`${CONTAINER} flex flex-col gap-4 py-8 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between ${mono.className}`}
        >
          <p>
            © {new Date().getFullYear()} {cv.name}
          </p>
          <ul className="flex gap-6">
            {cv.links.map((link) => (
              <li key={link.kind}>
                <a
                  href={link.href}
                  className="transition hover:text-white"
                  {...(link.kind === "email"
                    ? {}
                    : { target: "_blank", rel: "noopener noreferrer" })}
                >
                  {link.kind === "email"
                    ? "E-mail"
                    : link.kind === "linkedin"
                      ? "LinkedIn"
                      : "GitHub"}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  );
}
