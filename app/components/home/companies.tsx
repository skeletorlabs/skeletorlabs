"use client";

import Link from "next/link";
import Subtitle from "../subtitle";
import Badge from "../badge";
import Image from "next/image";
import { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import Loading from "../loading";
import { GlobeAltIcon, PhotoIcon } from "@heroicons/react/24/solid";

const companies = [
  {
    title: "SAMURAI STARTER",
    description: "Leading early-stage crowdfunding platform.",
    services: `
        <b><i>Skeletor Labs</i></b> contributed to the development of Samurai Starter
        by delivering smart contract systems supporting NFT-based vesting,
        funding logic, and protocol governance.
    `,
    bullets: [
      "Architected and implemented vesting and funding mechanisms",
      "Led deployment and network configuration on Base and Sonic",
      "Collaborated on token strategy and dApp-level flows",
    ],
    src: "/samurai.svg",
    chains: ["Base", "Sonic"],
    link: "http://samuraistarter.com",
    link2: "https://opensea.io/collection/samuraistarter",
  },
  {
    title: "ONE RING",
    description: "Multi-Chain Cross-Stable Yield Optimizer Platform.",
    services: `
        <b><i>Skeletor Labs</i></b> supported OneRing with protocol architecture and
        execution, focusing on secure relayer logic, bridge contracts, and
        multi-chain integration strategies.
    `,
    bullets: [
      "Designed and implemented cross-chain messaging modules.",
      "Integrated EVM & non-EVM networks via custom bridge logic",
      "Packaged SDKs and internal tooling for partner usage",
    ],
    src: "/onering.svg",
    chains: ["Fantom", "Optimism", "Solana"],
    link: "http://onering.tools",
  },
];

export default function Companies() {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<JSX.Element[] | undefined>(undefined);

  useEffect(() => {
    const _items = companies.map((item, index) => (
      <div
        key={index}
        className={`flex flex-col w-full ${
          index === 0 ? "bg-samurai" : "bg-onering"
        } bg-cover bg-no-repeat relative min-h-[600px]`} // min-h para garantir que a imagem apareça
      >
        {/* MOBILE */}
        <div className="flex flex-col justify-end w-full h-full mt-auto">
          <div className="flex flex-col justify-center items-center w-full py-8 gap-6 bg-[#10131B]/80 backdrop-blur-md">
            <div className="flex flex-col w-full justify-center items-center gap-2">
              <Image src={item.src} width={120} height={120} alt={item.title} />
              <p className="text-3xl text-white font-semibold">{item.title}</p>
              <p className="text-sm text-center text-white/70 mt-[-6px] px-8">
                {item.description}
              </p>
              <div className="flex items-center gap-2 text-xs text-white">
                {item.chains.map((chain, chainIndex) => (
                  <Badge key={chainIndex} text={chain} invert />
                ))}
                <Link
                  href={item.link}
                  target="blank"
                  className="hover:opacity-75"
                >
                  <GlobeAltIcon width={22} height={22} />
                </Link>
                {item.link2 && (
                  <Link
                    href={item.link2}
                    target="blank"
                    className="hover:opacity-75"
                  >
                    <PhotoIcon width={22} height={22} />
                  </Link>
                )}
              </div>
            </div>
            <div className="flex flex-col w-full justify-center items-center gap-2">
              <span
                className="text-white text-lg px-6 text-center"
                dangerouslySetInnerHTML={{ __html: item.services as string }}
              />
              <div className="flex flex-col justify-center items-center gap-4 w-full mt-6 px-8 text-white text-center">
                {item.bullets.map((bullet, idx) => (
                  <p
                    key={idx}
                    className="bg-white/10 py-2 px-4 text-center rounded-lg shadow w-full"
                  >
                    {bullet}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    ));

    setItems(_items);
    setLoading(false);
  }, []);

  return (
    <div id="companies" className="flex flex-col pt-10 gap-10">
      <Subtitle
        text="Who We've Built With"
        description="Protocols we've helped build through contract architecture, protocol logic, and launch-ready infra"
        padding
      />

      <div className="flex md:hidden flex-col xl:flex-row items-center px-0 backdrop-blur-sm">
        {loading ? (
          <div className="flex w-full items-center justify-center min-h-[360px]">
            <Loading />
          </div>
        ) : (
          <AliceCarousel
            disableButtonsControls
            autoPlay
            autoPlayInterval={3000}
            infinite
          >
            {items}
          </AliceCarousel>
        )}
      </div>

      <div className="hidden md:flex flex-col xl:flex-row items-center px-0 backdrop-blur-sm">
        {companies.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col w-full h-[700px] ${
              index === 0 ? "bg-samurai" : "bg-onering "
            } bg-cover bg-no-repeat relative group overflow-hidden`}
          >
            <div className="absolute bottom-0 left-0 w-full bg-[#10131B]/85 backdrop-blur-md py-6 px-10 flex items-center justify-start gap-6 border-t border-white/10 transition-all duration-500 group-hover:translate-y-full group-hover:opacity-0 z-20">
              <Image
                src={item.src}
                width={50}
                height={50}
                alt={item.title}
                priority={index === 0}
              />
              <p className="text-2xl text-white font-bold tracking-wider">
                {item.title}
              </p>
            </div>

            <div className="flex flex-col justify-center items-center w-full h-full gap-8 transition-all duration-200 bg-[#10131B]/70 backdrop-blur-md opacity-0 hover:opacity-100 z-30">
              <div className="flex flex-col w-full justify-center items-center gap-2">
                <Image
                  src={item.src}
                  width={140}
                  height={140}
                  alt={item.title}
                />
                <p className="text-3xl text-white font-semibold">
                  {item.title}
                </p>

                <p className="text-lg text-center text-white/70 mt-[-6px]">
                  {item.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-white">
                  {item.chains.map((chain, chainIndex) => (
                    <Badge key={chainIndex} text={chain} big invert />
                  ))}

                  <Link
                    href={item.link}
                    target="blank"
                    className="transition-opacity duration-200 hover:opacity-75"
                  >
                    <GlobeAltIcon width={32} height={32} />
                  </Link>

                  {item.link2 && (
                    <Link
                      href={item.link2}
                      target="blank"
                      className="transition-opacity duration-200 hover:opacity-75"
                    >
                      <PhotoIcon width={32} height={32} />
                    </Link>
                  )}
                </div>
              </div>
              <div className="flex flex-col w-full justify-center items-center gap-2">
                <span
                  className="text-white text-lg px-8 text-center"
                  dangerouslySetInnerHTML={{
                    __html: item.services as string,
                  }}
                />
                <div className="flex flex-col justify-center items-center gap-4 w-full mt-6 px-8 text-white/90">
                  {item.bullets.map((bullet, index) => (
                    <p
                      key={index}
                      className="bg-white/10 py-1 px-4 text-center rounded-full shadow"
                    >
                      {bullet}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
