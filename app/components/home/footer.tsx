import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";
import { useContext } from "react";
import { StateContext } from "@/app/context/state";
import NewTestimonialButton from "./newTestimonialButton";
import Image from "next/image";
import { SOCIALS } from "@/app/utils/conts";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function Footer() {
  const { setTestimonialBoxIsOpen } = useContext(StateContext);
  return (
    <>
      {/* MOBILE */}
      <footer
        className={`flex xl:hidden flex-col justify-between py-10 gap-4 bg-black z-20 w-full items-center ${jakarta.className}`}
      >
        <NewTestimonialButton />
        <div className="flex items-center gap-2">
          {SOCIALS.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              target="blank"
              className="text-violet-200 scale-75"
            >
              {item.icon}
            </Link>
          ))}
        </div>

        <div className="flex flex-col items-center gap-3 text-violet-200 font-thin tracking-wide mt-2 py-8 text-sm bg-skeletor-dark-violet w-full">
          <Image src="/logo-footer.svg" width={36} height={36} alt="logo" />
          <span>Ⓒ 2025 Skeletor Labs</span>
        </div>
      </footer>

      {/* DESKTOP */}
      <footer
        className={`hidden xl:flex bg-black z-20 w-[1180px] h-32 items-center justify-between px-14 ${jakarta.className}`}
      >
        <div className="flex items-center gap-3 text-violet-200 font-thin tracking-wide">
          <Image src="/logo-footer.svg" width={36} height={36} alt="logo" />
          <span>Ⓒ 2025 Skeletor Labs</span>
        </div>

        <NewTestimonialButton nobg />
        <div className="flex items-center gap-3">
          {SOCIALS.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              target="blank"
              className="text-violet-200 transition-all hover:text-violet-300 scale-90 hover:scale-105"
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </footer>
    </>
  );
}
