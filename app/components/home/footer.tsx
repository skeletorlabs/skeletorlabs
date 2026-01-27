import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";
import { useContext } from "react";
import { StateContext } from "@/app/context/state";
import NewTestimonialButton from "./newTestimonialButton";
import Image from "next/image";
import { SOCIALS } from "@/app/utils/conts";
import { mail } from "@/app/utils/svgs";
import { NAV_LINKS } from "../nav";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function Footer() {
  const { setTalkIsOpen } = useContext(StateContext);
  return (
    <>
      {/* MOBILE */}
      <footer
        className={`flex xl:hidden flex-col justify-between py-10 gap-4 bg-black z-20 w-full items-center ${jakarta.className}`}
      >
        <div className="flex flex-col w-full items-center justify-between gap-3">
          <Image
            src="/logo-footer.svg"
            width={48}
            height={48}
            alt="logo"
            className="transition-transform duration-200 hover:scale-105"
          />
          <Link
            href="mailto:hello@skeletorlabs.xyz"
            target="blank"
            className="text-violet-300 text-xs transition-colors duration-200 hover:text-violet-200"
          >
            hello@skeletorlabs.xyz
          </Link>
          <NewTestimonialButton />
        </div>

        <div className="flex w-full justify-center items-center h-full flex-wrap px-6 gap-5 py-7 my-5 bg-skeletor-dark-violet">
          {NAV_LINKS.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="
                flex justify-center items-center gap-2 text-violet-300 transition-all duration-200 text-sm
                hover:text-violet-200
                w-max px-2 h-full"
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center gap-2 w-full text-violet-300 text-xs">
          <div className="flex items-center gap-3">
            {SOCIALS.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                target="blank"
                className="text-violet-200 transition-all duration-200 hover:text-violet-300 scale-90 hover:scale-105"
              >
                {item.icon}
              </Link>
            ))}
            <button
              onClick={() => setTalkIsOpen(true)}
              className="text-violet-200 transition-all duration-200 hover:text-violet-300 scale-90 hover:scale-105"
            >
              {mail}
            </button>
          </div>
          <span className="text-white/80">
            Ⓒ Copyright 2025 - All rights reserved by Skeletor Labs
          </span>
        </div>
      </footer>

      {/* DESKTOP */}
      <footer
        className={`hidden xl:flex flex-col bg-black z-20 w-[1280px] items-center justify-center py-10 gap-8 ${jakarta.className}`}
      >
        <div className="flex w-full items-center justify-between px-14">
          <NewTestimonialButton />

          <Image
            src="/logo-footer.svg"
            width={48}
            height={48}
            alt="logo"
            className="transition-transform duration-200 hover:scale-105"
          />

          <Link
            href="mailto:hello@skeletorlabs.xyz"
            target="blank"
            className="text-violet-300 text-[16px] transition-colors duration-200 hover:text-violet-200"
          >
            hello@skeletorlabs.xyz
          </Link>
        </div>

        <div className="flex w-full justify-center items-center h-full bg-skeletor-dark-violet py-10">
          {NAV_LINKS.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="
                flex justify-center items-center gap-2 text-violet-300 transition-all duration-200 text-sm
                hover:text-violet-200
                w-max px-2 h-full"
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center gap-2 w-full text-violet-300 text-xs">
          <div className="flex items-center gap-3">
            {SOCIALS.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                target="blank"
                className="text-violet-200 transition-all duration-200 hover:text-violet-300 scale-90 hover:scale-105"
              >
                {item.icon}
              </Link>
            ))}
            <button
              onClick={() => setTalkIsOpen(true)}
              className="text-violet-200 transition-all duration-200 hover:text-violet-300 scale-90 hover:scale-105"
            >
              {mail}
            </button>
          </div>
          <span className="text-white/80">
            Ⓒ Copyright 2025 - All rights reserved by Skeletor Labs
          </span>
        </div>
      </footer>
    </>
  );
}
