"use client";
import { Plus_Jakarta_Sans } from "next/font/google";
import { useState, useEffect, useContext } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { StateContext } from "@/app/context/state";
import Nav from "../nav";
import { SOCIALS } from "@/app/utils/conts";
import Link from "next/link";
import { mail } from "@/app/utils/svgs";
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/20/solid";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

const STRINGS = [
  "Correctness over shortcuts.",
  "Security by design.",
  "Built right the first time.",
  "Edge cases by design.",
  "Real users. Real constraints.",
  "Real money. Real stakes.",
];

export default function Header({
  Terminal,
}: {
  Terminal: React.ComponentType;
}) {
  const { setTalkIsOpen } = useContext(StateContext);
  const [index, setIndex] = useState(0);

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    STRINGS[index].slice(0, latest),
  );

  useEffect(() => {
    const controls = animate(count, STRINGS[index].length, {
      type: "tween",
      duration: 2.5,
      ease: "easeInOut",
      onComplete: () => {
        setTimeout(() => {
          const exitControls = animate(count, 0, {
            type: "tween",
            duration: 1,
            ease: "easeInOut",
            onComplete: () => {
              setIndex((prev) => (prev + 1) % STRINGS.length);
            },
          });
        }, 2000);
      },
    });
    return controls.stop;
  }, [index, count]);

  return (
    <div
      id="about"
      className="relative w-full overflow-hidden flex flex-col justify-start items-center"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
      >
        <source src="/videos/space.mp4" type="video/mp4" />
      </video>

      <Nav />

      <div className="z-20 flex flex-col justify-center items-center md:pt-[124px] bg-gradient-to-b from-transparent to-black w-full min-h-full">
        <div className="flex flex-col z-20 px-4 xl:px-14 pt-24 pb-14">
          <div className="flex flex-col items-center text-center gap-8 md:gap-14">
            <div
              className={`max-w-full sm:max-w-xl lg:max-w-4xl min-h-[220px] font-extrabold !leading-[1.22] text-white text-[2.1rem] sm:text-5xl md:text-6xl lg:text-[60px] ${jakarta.className}`}
            >
              <p className="mb-4">
                We step in when Web3 systems actually matter...
              </p>
              <div className="bg-gradient-to-br from-[#9C74F1] via-[#987FFF] to-[#3600A8] text-transparent bg-clip-text inline-block min-h-[1.5em]">
                <motion.span className="inline-block">
                  {displayText}
                </motion.span>
              </div>
            </div>

            <div className="flex items-center justify-center flex-col gap-4 text-lg sm:text-2xl w-full">
              <button
                onClick={() => setTalkIsOpen(true)}
                className="flex items-center justify-center gap-2 px-8 py-3 text-lg font-semibold rounded-full border border-violet-300/10 backdrop-blur-md bg-white/5 text-white hover:bg-white/10 transition-all shadow-lg hover:shadow-2xl"
              >
                <span>Get a Quote</span>
                <ChatBubbleLeftEllipsisIcon
                  width={28}
                  height={28}
                  className="text-violet-200"
                />
              </button>
              <div className="flex items-center gap-3">
                {SOCIALS.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    target="blank"
                    className="text-violet-200 hover:text-violet-300 scale-90 hover:scale-100"
                  >
                    {item.icon}
                  </Link>
                ))}
                <button
                  onClick={() => setTalkIsOpen(true)}
                  className="text-violet-200 hover:text-violet-300 scale-90 hover:scale-100"
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
