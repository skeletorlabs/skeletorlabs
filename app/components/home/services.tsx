import Subtitle from "../subtitle";
import { Plus_Jakarta_Sans } from "next/font/google";
import {
  CommandLineIcon,
  WindowIcon,
  ScaleIcon,
  SparklesIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import classNames from "classnames";
import { useContext } from "react";
import { StateContext } from "@/app/context/state";
import { WrenchScrewdriverIcon } from "@heroicons/react/20/solid";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

const items = [
  {
    title: "Smart Contract Development",
    description:
      "Custom Solidity contracts built for security, performance, and modularity. From DeFi to NFTs and DAOs.",
    icon: <CommandLineIcon className="h-6 w-6 text-violet-300" />,
  },
  {
    title: "dApp Engineering",
    description:
      "Full-stack Web3 applications using React, React Native, Next.js, and Ethers — responsive, wallet-connected, and gas-aware.",
    icon: <WindowIcon className="h-6 w-6 text-violet-300" />,
  },
  {
    title: "Tokenomics & Protocol Design",
    description:
      "From utility to yield, we help design token systems that actually work — with sustainability, adoption, and flow.",
    icon: <ScaleIcon className="h-6 w-6 text-violet-300" />,
  },
  {
    title: "NFT Systems & Creative Drops",
    description:
      "Build drops, minting logic, metadata flows, and creative utility — on-brand, on-chain, and gas-optimized.",
    icon: <SparklesIcon className="h-6 w-6 text-violet-300" />,
  },
  {
    title: "Audit-Ready Development",
    description:
      "We design with audit-readiness in mind and collaborate with top audit firms to help you ship safe, reviewed code.",
    icon: <ShieldCheckIcon className="h-6 w-6 text-violet-300" />,
  },
  {
    title: "Product Prototyping & Launch Support",
    description:
      "Got an idea? We turn it into something real — MVPs, alpha launches, and testnets included.",
    icon: <RocketLaunchIcon className="h-6 w-6 text-violet-300" />,
  },
];

export default function Services() {
  const { setTalkIsOpen } = useContext(StateContext);
  return (
    <div
      id="services"
      className="flex flex-col px-8 xl:px-14 py-10 gap-10 bg-skeletor-dark-violet/80 backdrop-blur-md"
    >
      <Subtitle
        text="What We Offer"
        description="Our Services — Modular support for Web3 product teams"
      />

      <div className="flex justify-center xl:justify-between items-center gap-8 flex-wrap">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center transition-all duration-200 md:hover:scale-105 hover:brightness-110 hover:shadow"
          >
            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-black border border-violet-300 text-lg shadow-md shadow-black z-20">
              {item.icon}
            </span>
            <div
              className={classNames({
                "flex flex-col items-center justify-center mt-[-28px] max-w-[35.5rem] gap-1 pt-6 backdrop-blur-md border border-white/5 text-center rounded-xl transition-transform duration-200 hover:opacity-90 shadow-lg": true,
                "bg-skeletor-gray/40": [0, 2, 4].includes(index),
                "bg-skeletor-gray": [1, 3, 5].includes(index),
                "lg:bg-skeletor-gray/40": [0, 3, 4].includes(index),
                "lg:bg-skeletor-gray": [1, 2, 5].includes(index),
              })}
            >
              <p
                className={`text-2xl text-violet-300 p-6 ${jakarta.className}`}
              >
                {item.title}
              </p>

              <p className="text-sm text-white/60 px-4 py-6 rounded-b-xl w-full h-full bg-black/70 font-sans">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => setTalkIsOpen(true)}
        className="text-center text-lg text-violet-300 max-w-2xl mx-auto transition-all duration-200 md:hover:scale-105 hover:brightness-110 hover:shadow"
      >
        Let's talk — we bring the full toolkit
        <WrenchScrewdriverIcon
          width={24}
          height={24}
          className="display-inline ml-2 inline-block text-violet-300"
        />
      </button>
    </div>
  );
}
