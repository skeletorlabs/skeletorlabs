import Link from "next/link";
import {
  discord,
  etherscan,
  github,
  linkedin,
  telegram,
  twitterX,
} from "../../utils/svgs";
import { Plus_Jakarta_Sans } from "next/font/google";
import { PencilSquareIcon } from "@heroicons/react/20/solid";
import { useContext } from "react";
import { StateContext } from "@/app/context/state";
import NewTestimonialButton from "./newTestimonialButton";
import Image from "next/image";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

const socials = [
  { icon: linkedin, href: "https://www.linkedin.com/in/lfsilveira" },
  { icon: github, href: "https://github.com/skeletordapps" },
  { icon: telegram, href: "https://telegram.me/skeletor_keldor" },
  { icon: twitterX, href: "https://x.com/0x_theL" },
  { icon: discord, href: "skeletor8555" },
];

export default function Footer() {
  const { setTestimonialBoxIsOpen } = useContext(StateContext);
  return (
    <>
      {/* MOBILE */}
      <footer
        className={`flex xl:hidden flex-col py-10 gap-4 bg-black z-20 w-full items-center justify-center px-8 ${jakarta.className}`}
      >
        <div className="flex items-center gap-8">
          {socials.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              target="blank"
              className="text-violet-200"
            >
              {item.icon}
            </Link>
          ))}
        </div>

        <div className="flex flex-col items-center gap-3 text-violet-200 font-thin tracking-wide mt-5 text-xs">
          <div className="flex items-center gap-3">
            <NewTestimonialButton nobg />
            <span>Ⓒ 2025 Skeletor Labs</span>
          </div>
          <Image src="/logo-with-bg.svg" width={35} height={38} alt="logo" />
        </div>
      </footer>

      {/* DESKTOP */}
      <footer
        className={`hidden xl:flex bg-black z-20 w-[1180px] h-32 items-center justify-between px-14 ${jakarta.className}`}
      >
        <div className="flex items-center gap-3 text-violet-200 font-thin tracking-wide">
          <Image src="/logo-with-bg.svg" width={35} height={38} alt="logo" />
          <span>Ⓒ 2025 Skeletor Labs</span>
        </div>

        <NewTestimonialButton nobg />
        <div className="flex items-center gap-5">
          {socials.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              target="blank"
              className="text-violet-200 hover:text-white hover:scale-105"
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </footer>
    </>
  );
}
