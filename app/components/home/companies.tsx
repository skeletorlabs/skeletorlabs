import Link from "next/link";
import Subtitle from "../subtitle";
import Badge from "../badge";
import Image from "next/image";
import { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import Loading from "../loading";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
  CheckCircleIcon,
  GlobeAltIcon,
  PhotoIcon,
} from "@heroicons/react/24/solid";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

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
    bg: "/onering-notebook.png",
    chains: ["Base", "Sonic"],
    link: "http://samuraistarter.com",
    link2: "https://opensea.io/collection/samuraistarter",
    timeframe: "2023-Present",
    position: "CTO - Blockchain Engineer",
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
    bg: "/cyborg-male.png",
    chains: ["Fantom", "Optimism", "Solana"],
    link: "http://onering.tools",
    timeframe: "2021-2023",
    position: "FE Lead - Blockchain Engineer",
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
          index === 0 ? "bg-samurai" : "bg-onering "
        } bg-cover bg-no-repeat hover:opacity-90 relative`}
      >
        <div className="flex flex-col justify-center items-center w-full h-full py-8 gap-6 transition-all duration-200 bg-[#10131B]/70 backdrop-blur-md">
          <div className="flex flex-col w-full justify-center items-center gap-2">
            <Image src={item.src} width={140} height={140} alt={item.title} />
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
                className="transition-opacity duration-200 hover:opacity-75"
              >
                <GlobeAltIcon width={22} height={22} />
              </Link>

              {item.link2 && (
                <Link
                  href={item.link2}
                  target="blank"
                  className="transition-opacity duration-200 hover:opacity-75"
                >
                  <PhotoIcon width={22} height={22} />
                </Link>
              )}
            </div>
          </div>
          <div className="flex flex-col w-full justify-center items-center gap-2">
            <span
              className="text-white text-sm px-8 text-center"
              dangerouslySetInnerHTML={{
                __html: item.services as string,
              }}
            />
            <div className="flex flex-col justify-center items-center gap-4 w-full mt-6 px-8 text-black text-center">
              {item.bullets.map((bullet, index) => (
                <p key={index} className="bg-white/80 py-1 px-2">
                  {bullet}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    ));

    setItems(_items);
    setLoading(false);
  }, [setLoading]);
  return (
    <div className="flex flex-col pt-10 gap-10">
      <Subtitle
        text="Who We've Built With"
        description="Protocols we've helped build through contract architecture, protocol logic, and launch-ready infra"
        padding
      />

      {/* MOBILE */}
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

      {/* DESKTOP */}
      <div className="hidden md:flex flex-col xl:flex-row items-center px-0 backdrop-blur-sm">
        {companies.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col w-full h-[700px] ${
              index === 0 ? "bg-samurai" : "bg-onering "
            } bg-cover bg-no-repeat hover:opacity-90 relative`}
          >
            <div className="flex flex-col justify-center items-center w-full h-full gap-8 transition-all duration-200 bg-[#10131B]/70 backdrop-blur-md opacity-0 hover:opacity-100">
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
                <div className="flex flex-col justify-center items-center gap-4 w-full mt-6 px-8 text-black">
                  {item.bullets.map((bullet, index) => (
                    <p
                      key={index}
                      className="bg-white/70 py-1 px-2 text-center"
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
