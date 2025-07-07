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
      "Full-stack Web3 applications using React, Next.js, and Ethers — responsive, wallet-connected, and gas-aware.",
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
    title: "Audits & Security Reviews",
    description:
      "Pre-launch sanity checks or post-launch diagnostics. We help you ship with confidence and avoid common exploits.",
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
  return (
    <div className="flex flex-col px-8 xl:px-14 py-10 gap-10 bg-skeletor-dark-violet/80 backdrop-blur-md">
      <Subtitle
        text="What We Offer"
        description="Our Services — Modular support for Web3 product teams"
      />

      <div className="flex justify-center xl:justify-between items-center gap-8 flex-wrap">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-full lg:w-auto"
          >
            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-black border border-violet-300 text-lg shadow-md shadow-black z-20">
              {item.icon}
            </span>
            <div className="flex flex-col items-center justify-center mt-[-28px] max-w-lg gap-1 pt-6 backdrop-blur-md border border-white/5 text-center rounded-xl transition-transform hover:opacity-90 shadow-lg">
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
    </div>
  );
}
