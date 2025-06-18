"use client";
import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import Typed from "typed.js";
import { useRef, useEffect } from "react";
import Link from "next/link";
import Subtitle from "./components/subtitle";
import { discord, github, linkedin, telegram, twitterX } from "./utils/svgs";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

const socials = [
  { icon: linkedin, href: "#" },
  { icon: github, href: "#" },
  { icon: telegram, href: "#" },
  { icon: twitterX, href: "#" },
  { icon: discord, href: "#" },
];

const stack = [
  { href: "https://book.getfoundry.sh/", src: "/stack/FOUNDRY.svg" },
  { href: "https://thegraph.com/", src: "/stack/GRAPH.svg" },
  { href: "https://hardhat.org/", src: "/stack/HARDHAT.svg" },
  { href: "https://nextjs.org/", src: "/stack/NEXT.svg" },
  { href: "https://www.openzeppelin.com/", src: "/stack/OZ.svg" },
  { href: "https://react.dev/", src: "/stack/REACT.svg" },
  { href: "https://remix.ethereum.org/", src: "/stack/REMIX.svg" },
  { href: "https://soliditylang.org/", src: "/stack/SOLIDITY.svg" },
  { href: "https://tailwindcss.com/", src: "/stack/TAILWIND.svg" },
  { href: "https://vercel.com/", src: "/stack/VERCEL.svg" },
];

const companies = [
  {
    title: "SamuraiStarter",
    description:
      "Leverage Inu, social passive trading. Yield and Trade profit sharing powered by $LEVI token",
    src: "/samurai.svg",
    chains: ["Base"],
    link: "http://samuraistarter.com",
  },
  {
    title: "One Ring",
    description:
      "One Ring is a Multi-Chain Cross-Stable Yield Optimizer Platform.",
    src: "/onering.svg",
    chains: ["Fantom", "Optimism", "Solana"],
    link: "http://onering.tools",
  },
];

const contributions = [
  {
    title: "L2VE",
    description:
      "Leverage Inu, social passive trading. Yield and Trade profit sharing powered by $LEVI token",
    src: "/l2ve.png",
    chains: ["Base"],
    link: "http://l2ve.com",
  },
  {
    title: "Leverage-Inu",
    description:
      "Leverage Inu, social passive trading. Yield and Trade profit sharing powered by $LEVI token",
    src: "/levi.svg",
    chains: ["Arbitrum One"],
    link: "http://samuraistarter.com",
  },

  {
    title: "OptimismPrime",
    description:
      "One Ring is a Multi-Chain Cross-Stable Yield Optimizer Platform.",
    src: "/onering.svg",
    chains: ["Optimism"],
    link: "http://onering.tools",
  },
];

const projects = [
  {
    title: "foundry-invariant-tests",
    description: "Invariant tests for WETH9",
    language: "Solidity",
  },

  {
    title: "foundry-two-rewards-staking",
    description: "Foundry + Solidity",

    language: "Solidity",
  },

  {
    title: "hh-reflection-erc20",
    description: "An ERC20 token with reflection module",
    language: "Solidity",
  },

  {
    title: "subgraph-levi-lottery",
    description: "A subgraph for levi lottery contract",
    language: "TypeScript",
  },

  {
    title: "foundry-otc-exchange",
    description:
      "Exchange TOKEN0 for TOKEN1 using predefined rate. Exchange rate is flexible",
    language: "Solidity",
  },
];

export default function Home() {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
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
    };
  }, []);
  return (
    <>
      <main className="flex flex-col justify-center items-center w-[1024px] text-white">
        <div className="bg-space bg-no-repeat bg-cover bg-left-top ">
          <div className="flex flex-col z-20 bg-gradient-to-b from-transparent via-black/30 to-black rounded-t-[40px] mt-40">
            <div className="flex flex-col z-20 py-12 px-14  rounded-t-[40px]">
              <div className="flex flex-row items-center mt-[-120px] pb-24">
                <div
                  className={`font-extrabold text-white text-[66px] leading-tight ${jakarta.className}`}
                >
                  <p className="pr-10">Dedicated to build the Future of the </p>
                  <span
                    ref={el}
                    className="bg-gradient-to-br from-[#9C74F1] via-[#987FFF] to-[#3600A8] text-transparent bg-clip-text"
                  />
                </div>

                <Image
                  src="/logo2.svg"
                  width={230}
                  height={230}
                  alt="logo"
                  className="mt-[-55px] opacity-70 animate-pulse"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="text-3xl bg-white/5 w-max py-2 px-6 font-sans">
                  <p>Hello stranger! 👋</p>
                  <p className="text-2xl text-white/80">
                    I'm Lucas! AKA -{" "}
                    <span className="text-violet-500">Skeletor</span>
                  </p>
                </div>
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
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full min-h-[1200px] z-20 py-[40px] bg-black bg-eth2 bg-bottom bg-no-repeat gap-10">
          <div className="flex flex-col bg-black/10 px-14 py-10 border-t border-b border-white/5 gap-10">
            <Subtitle
              text="Companies"
              description="Current/Past full-time experiences in blockchain companies since 2021"
            />
            <div className="flex flex-row items-center gap-14">
              {companies.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  target="blank"
                  className="flex flex-col items-center justify-center gap-1 w-full bg-violet-300/10 border border-neutral-800 p-6 rounded-xl transition-transform hover:scale-[1.04] hover:opacity-90"
                >
                  <div className="flex items-center justify-center bg-black border border-neutral-900 w-[160px] h-[160px] rounded-full">
                    <Image src={item.src} width={110} height={110} alt={"#"} />
                  </div>
                  <p className="text-xl text-violet-300">{item.title}</p>
                  <div className="flex items-center gap-2 text-xs text-violet-200">
                    {item.chains.map((chain, chainIndex) => (
                      <span
                        key={chainIndex}
                        className="flex items-center justify-center text-center bg-indigo-600 rounded-lg px-2"
                      >
                        {chain}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm w-[300px] text-center mt-2 text-white/70 min-h-[50px]">
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col bg-black/30 px-14 py-10 border-t border-b border-white/5 gap-10">
            <Subtitle
              text="Contributions"
              description="Latest tech development for projects"
            />
            <div className="flex flex-row items-center flex-wrap gap-16">
              {contributions.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  target="blank"
                  className="flex flex-col items-center justify-center gap-1 bg-black/60 border border-neutral-800 p-6 rounded-xl transition-transform hover:scale-[1.04] hover:opacity-90"
                >
                  <div className="flex items-center justify-center bg-black/60 border border-neutral-900 w-[160px] h-[160px] rounded-full">
                    <Image src={item.src} width={110} height={110} alt={"#"} />
                  </div>
                  <p className="text-xl text-violet-300">{item.title}</p>
                  <div className="flex items-center gap-2 text-xs text-violet-200">
                    {item.chains.map((chain, chainIndex) => (
                      <span
                        key={chainIndex}
                        className="flex items-center justify-center text-center bg-indigo-600 rounded-lg px-2"
                      >
                        {chain}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm w-[200px] text-center mt-2 text-white/70 min-h-[80px]">
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col bg-black/30 px-14 py-10 border-t border-b border-white/5 gap-10">
            <Subtitle
              text="Languages & Tools"
              description="The most used techs in development process"
            />
            <div className="flex flex-row items-center flex-wrap gap-6">
              {stack.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  target="blank"
                  className="transition-transform hover:scale-[1.04] hover:opacity-90"
                >
                  <Image
                    src={item.src}
                    width={130}
                    height={130}
                    alt={item.href}
                  />
                </Link>
              ))}
            </div>
          </div>{" "}
        </div>
      </main>
      <footer
        className={`bg-black w-[1024px] h-24 flex items-center justify-between px-14 ${jakarta.className}`}
      >
        <div className="text-violet-200 font-thin tracking-wide">
          Ⓒ 2025 Skeletor Dapps
        </div>
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
