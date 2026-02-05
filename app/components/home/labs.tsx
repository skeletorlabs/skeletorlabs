"use client";

import Link from "next/link";
import Subtitle from "../subtitle";
import Image from "next/image";
import Badge from "../badge";
import AliceCarousel from "react-alice-carousel";
import Loading from "../loading";
import { useEffect, useState, useMemo } from "react";

const list = [
  {
    title: "Crypto API",
    description:
      "A production-grade Go API powering real-time crypto network intelligence and on-chain signals.",
    src: "/labs/crypto-api.svg",
    badges: ["Bitcoin", "Infra", "Golang"],
    link: "https://github.com/skeletorlabs/crypto-api",
  },
  {
    title: "Card Preview",
    description:
      "Preview Metamask card transactions across tokens and fiat currencies before execution.",
    src: "/labs/card-preview.svg",
    badges: ["Linea"],
    link: "https://previewer.skeletorlabs.xyz",
  },
  {
    title: "StableZ",
    description:
      "A Base-native yield optimization protocol for stable and LSDfi assets.",
    src: "/labs/stablez.svg",
    badges: ["Base"],
    link: "#",
  },
  {
    title: "Juggernauts",
    description:
      "A Web3 sports platform combining fantasy mechanics, NFTs, and on-chain competition.",
    src: "/labs/juggernauts.svg",
    badges: ["Base"],
    link: "https://www.juggernauts.io/",
  },
];

export default function Labs() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const cards = useMemo(() => {
    return list.map((item, index) => (
      <Link
        key={index}
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center gap-1 odd:bg-[#2F2F55]/30 even:bg-skeletor-gray/60 backdrop-blur-md border border-neutral-800 p-6 px-10 xl:px-20 rounded-xl transition-all duration-200 hover:scale-[1.04] hover:opacity-90 shadow-lg w-full xl:w-auto"
      >
        <div className="flex items-center justify-center backdrop-blur-sm border border-neutral-900 w-[160px] h-[160px] rounded-full">
          <Image
            src={item.src}
            width={130}
            height={130}
            alt={item.title}
            priority={index < 2}
            loading={index < 2 ? undefined : "lazy"}
          />
        </div>
        <p className="text-xl text-violet-300">{item.title}</p>
        <div className="flex items-center gap-2 text-xs text-violet-200">
          {item.badges.map((chain, chainIndex) => (
            <Badge key={chainIndex} text={chain} />
          ))}
        </div>
        <p className="text-sm w-[200px] text-center mt-2 text-white/70 min-h-[80px]">
          {item.description}
        </p>
      </Link>
    ));
  }, []);

  if (!mounted) {
    return (
      <div className="flex w-full items-center justify-center min-h-[400px]">
        <Loading />
      </div>
    );
  }

  return (
    <div
      id="labs"
      className="flex flex-col px-4 xl:px-14 py-10 gap-10 bg-skeletor-dark-violet"
    >
      <Subtitle
        text="In the Lab"
        description="Products, infrastructure and experimental tools"
      />

      {/* MOBILE */}
      <div className="flex xl:hidden flex-row justify-between items-center flex-wrap gap-4">
        <AliceCarousel
          disableButtonsControls
          autoPlay
          autoPlayInterval={3000}
          infinite
          mouseTracking
          items={cards}
        />
      </div>

      {/* DESKTOP */}
      <div className="hidden xl:flex flex-row items-center justify-start flex-wrap gap-10">
        {cards}
      </div>
    </div>
  );
}
