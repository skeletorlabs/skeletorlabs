"use client";
import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import Typed from "typed.js";
import { useRef, useEffect, useContext, useState } from "react";
import Link from "next/link";
import {
  discord,
  github,
  linkedin,
  telegram,
  twitterX,
} from "../../utils/svgs";
import { PencilSquareIcon } from "@heroicons/react/20/solid";
import { StateContext } from "@/app/context/state";
import NewTestimonialButton from "./newTestimonialButton";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

const socials = [
  { icon: linkedin, href: "https://www.linkedin.com/in/lfsilveira" },
  { icon: github, href: "https://github.com/skeletordapps" },
  { icon: telegram, href: "https://telegram.me/skeletor_keldor" },
  { icon: twitterX, href: "https://x.com/0x_theL" },
  { icon: discord, href: "skeletor8555" },
];

export default function Header() {
  const [showSecond, setShowSecond] = useState(false);
  const { setTestimonialBoxIsOpen } = useContext(StateContext);
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowSecond((prev) => !prev);
    }, 3000);

    const typed = new Typed(el.current, {
      strings: ["Web3 Techs", "Blockchain", "De-Fi Space", "NFTs Collections"],
      typeSpeed: 100,
      loop: true,
      fadeOutDelay: 300,
      backSpeed: 100,
      cursorChar: "|",
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="w-full bg-space bg-no-repeat bg-cover bg-left-top relative">
      {/* MOBILE HEADER INSERTION */}
      <div className="flex xl:hidden items-center justify-between mt-6 px-4">
        <div className="flex items-center gap-2">
          <Image
            src="/logo2.svg"
            width={58}
            height={58}
            alt="logo"
            // className="bg-white/80 rounded-full p-2"
          />
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center">
            {socials.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                target="blank"
                className="text-violet-200 scale-[0.7]"
              >
                {item.icon}
              </Link>
            ))}
          </div>
          <NewTestimonialButton nobg />
        </div>
      </div>
      <div className="flex flex-col z-20 bg-gradient-to-b from-transparent via-black/30 to-black rounded-t-[40px] mt-40">
        <div className="flex flex-col z-20 py-12 px-8 xl:px-14 rounded-t-[40px]">
          <div className="flex flex-col xl:flex-row items-center mt-[-120px] pb-24 text-center xl:text-start">
            <div
              className={`font-extrabold text-white text-5xl xl:text-[66px] leading-tight ${jakarta.className}`}
            >
              <p className="xl:pr-10">Dedicated to build the Future of the </p>
              <span
                ref={el}
                className="bg-gradient-to-br from-[#9C74F1] via-[#987FFF] to-[#3600A8] text-transparent bg-clip-text"
              />
            </div>

            <div className="hidden xl:block relative min-w-[240px] min-h-[240px] mt-[-55px] opacity-90 transition-all animate-pulse duration-1000">
              <Image
                src="/logo-v3.svg"
                width={230}
                height={230}
                alt="logo"
                className={`flex absolute top-10 left-10 !w-[180px] !h-[180px] self-center transition-opacity duration-1000 delay-500 ease-in-out ${
                  showSecond ? "opacity-0" : "opacity-100"
                }`}
              />

              <Image
                src="/logo2.svg"
                width={230}
                height={230}
                alt="logo"
                className={`absolute top-3 left-3 !w-[240px] !h-[240px] self-center transition-opacity duration-1000 delay-500 ease-in-out ${
                  showSecond ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          </div>

          <div className="flex flex-col gap-10  xl:flex-row xl:gap-0 items-center justify-between">
            <div className="text-3xl w-max py-2 px-1 font-sans rounded-lg text-center xl:text-start">
              <p>Hello stranger! 👋</p>
              <p className="text-2xl text-white/80">
                I'm Lucas! AKA -{" "}
                <span className="text-violet-500">Skeletor</span>
              </p>
            </div>
            <div className="hidden xl:flex flex-col gap-4">
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
              <NewTestimonialButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
