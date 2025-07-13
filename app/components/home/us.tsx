import { StateContext } from "@/app/context/state";
import { useContext } from "react";
import TalkInBox from "../talkInBox";
import {
  CheckCircleIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

const reasons = [
  {
    icon: <CheckCircleIcon className="h-6 w-6 text-violet-300" />,
    title: "Trusted by Builders",
    description:
      "DeFi teams, NFT collections, and DAOs rely on us to ship smart, scalable code.",
  },
  {
    icon: <SparklesIcon className="h-6 w-6 text-violet-300" />,
    title: "Creative & Precise",
    description:
      "We blend product thinking with technical depth, balancing UX and performance.",
  },
  {
    icon: <ShieldCheckIcon className="h-6 w-6 text-violet-300" />,
    title: "Security-Minded",
    description:
      "Code battle-tested in production, with select audits and bounty-backed confidence.",
  },
  // {
  //   icon: <RocketLaunchIcon className="h-6 w-6 text-violet-300" />,
  //   title: "Built to Scale",
  //   description:
  //     "Live on multiple chains, serving real users with performance-first design.",
  // },
];

export default function Us() {
  const { setTalkIsOpen } = useContext(StateContext);
  return (
    <div className="flex flex-col relative">
      <div className="flex flex-col justify-center lg:justify-start items-center gap-10 py-10 my-10 bg-skeletor-dark-violet/70 backdrop-blur-md">
        <div className="flex flex-col justify-center items-center sm:flex-row lg:justify-evenly gap-8 lg:gap-0 flex-wrap w-full">
          <div className="flex items-center text-5xl sm:text-7xl lg:text-5xl relative">
            <span className="z-20">Why Us?</span>
            <span className="absolute bottom-[-2px] left-[2px] w-max flex items-center text-5x text-pink-400">
              Why Us?
            </span>
          </div>
          {reasons.map((item, index) => (
            <div
              key={index}
              className="flex flex-col text-center gap-2 max-w-[360px] xl:max-w-[240px]"
            >
              <div className="flex justify-center items-center gap-2 text-violet-300 text-xl">
                {item.icon}
                <span>{item.title}</span>
              </div>
              <p className="text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <p className="text-[110px] text-center xl:text-[180px] px-4 xl:px-10 pt-6 pb-16 font-bold leading-tight xl:leading-none">
        <button
          onClick={() => setTalkIsOpen(true)}
          className="transition-all duration-200 hover:scale-[1.02] hover:text-violet-200 tracking-wider"
        >
          LET'S TALK!
        </button>
      </p>
      <TalkInBox />
    </div>
  );
}
