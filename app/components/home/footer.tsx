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

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

const socials = [
  { icon: linkedin, href: "https://www.linkedin.com/in/lfsilveira" },
  { icon: github, href: "https://github.com/skeletordapps" },
  { icon: telegram, href: "https://telegram.me/skeletor_keldor" },
  { icon: twitterX, href: "https://x.com/0x_theL" },
  { icon: discord, href: "skeletor8555" },
];
interface Footer {
  setOpen: (open: boolean) => void;
}

export default function Footer({ setOpen }: Footer) {
  return (
    <>
      <footer
        className={`flex xl:hidden flex-col py-10 gap-4 bg-black w-full items-center justify-center px-8 ${jakarta.className}`}
      >
        <div className="flex items-center gap-8">
          {socials.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-violet-200 hover:text-white hover:scale-105"
            >
              {item.icon}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setOpen(true)}
          className="flex items-center justify-center p-2 px-4 rounded-xl bg-violet-300 text-black gap-2 transition-colors hover:bg-violet-200"
        >
          <PencilSquareIcon width={20} height={20} />
          <span>Write Testimonial</span>
        </button>
        <div className="text-violet-200 font-thin tracking-wide mt-5 text-xs">
          Ⓒ 2025 Skeletor Dapps
        </div>
      </footer>
      <footer
        className={`hidden xl:flex bg-black w-[1180px] h-24 items-center justify-between px-14 ${jakarta.className}`}
      >
        <div className="text-violet-200 font-thin tracking-wide">
          Ⓒ 2025 Skeletor Dapps
        </div>

        <button
          onClick={() => setOpen(true)}
          className="flex items-center justify-center gap-2 transition-colors text-violet-200 hover:text-violet-100"
        >
          <PencilSquareIcon width={20} height={20} />
          <span>Write Testimonial</span>
        </button>
        <div className="flex items-center gap-5">
          {socials.map((item, index) => (
            <Link
              key={index}
              href={item.href}
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
