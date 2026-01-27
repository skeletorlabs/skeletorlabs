"use client";
import { Plus_Jakarta_Sans } from "next/font/google";
import Typed from "typed.js";
import { useRef, useEffect, useContext } from "react";
import { StateContext } from "@/app/context/state";
import Nav from "../nav";
import { SOCIALS } from "@/app/utils/conts";
import Link from "next/link";
import { mail } from "@/app/utils/svgs";
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/20/solid";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

interface HeaderProps {
  Terminal: React.ComponentType;
}

export default function Header({ Terminal }: HeaderProps) {
  const { setTalkIsOpen } = useContext(StateContext);
  const el = useRef(null); // Create reference to store the DOM element containing the animation

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Correctness over shortcuts.",
        "Security by design.",
        "Built right the first time.",
        "Edge cases by design.",
        "Real users. Real constraints.",
        "Real money. Real stakes.",
      ],
      typeSpeed: 100,
      loop: true,
      fadeOutDelay: 300,
      backSpeed: 100,
      cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      id="about"
      className="relative w-full overflow-hidden flex flex-col justify-start items-center"
    >
      <video
        autoPlay
        loop
        muted
        width="100%"
        height="auto"
        playsInline
        preload="auto"
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
        poster="/space.svg"
      >
        <source src="/videos/space.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Nav />

      <div className="z-20 flex flex-col justify-center items-center md:pt-[124px] bg-gradient-to-b from-transparent to-black w-full max-w-full min-h-full">
        <div className="flex flex-col z-20 px-8 xl:px-14 pt-24 md:pt-0 lg:pt-24 pb-14">
          <div className="flex flex-col items-center pb-6 text-center gap-8 md:gap-14">
            <div
              className={`max-w-full sm:max-w-xl lg:max-w-4xl min-h-[220px] sm:min-h-[280px] md:min-h-[340px] lg:min-h-[240px] font-extrabold !leading-[1.22] text-white text-[2.1rem] sm:text-5xl md:text-6xl lg:text-[60px] ${jakarta.className}`}
            >
              <p>We step in when Web3 systems actually matter...</p>
              <span
                ref={el}
                className="bg-gradient-to-br from-[#9C74F1] via-[#987FFF] to-[#3600A8] text-transparent bg-clip-text"
              />
            </div>

            <div className="flex items-center justify-center flex-col gap-4 text-lg sm:text-2xl leading-[1.7] sm:leading-[1.7] w-full">
              <button
                onClick={() => setTalkIsOpen(true)}
                className="
                  flex items-center justify-center gap-2 px-8 py-3 text-lg sm:text-xl font-semibold 
                  rounded-full border border-violet-300/10 backdrop-blur-md 
                  bg-white/5 text-white hover:bg-white/10
                  transition-all duration-200 shadow-lg hover:shadow-2xl
                "
                aria-label="Get a quote"
              >
                <span>Get a Quote</span>
                <ChatBubbleLeftEllipsisIcon
                  width={28}
                  height={28}
                  aria-hidden="true"
                  className="drop-shadow-md text-violet-200"
                />
              </button>

              <div className="flex items-center gap-3">
                {SOCIALS.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    target="blank"
                    className="text-violet-200 transition-all duration-200 hover:text-violet-300 scale-90 hover:scale-100"
                  >
                    {item.icon}
                  </Link>
                ))}
                <button
                  onClick={() => setTalkIsOpen(true)}
                  className="text-violet-200 transition-all duration-200 hover:text-violet-300 scale-90 hover:scale-100"
                >
                  {mail}
                </button>
              </div>
            </div>
          </div>
        </div>

        <Terminal />
      </div>
    </div>
  );
}
