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
      <div key={index} className="flex md:hidden flex-col w-full h-[700px]">
        <div className="flex flex-col items-center w-full h-full">
          <div className="flex flex-col w-full h-max py-10 justify-center items-center gap-2 bg-[#10131B]/95 backdrop-blur-md">
            <Image src={item.src} width={140} height={140} alt={"#"} />
            <p className="text-2xl text-violet-300 font-semibold">
              {item.title}
            </p>

            <p className="text-sm text-center text-white/70 mt-[-6px]">
              {item.description}
            </p>
            <div className="flex items-center gap-2 text-xs text-indigo-600">
              {item.chains.map((chain, chainIndex) => (
                <Badge key={chainIndex} text={chain} big />
              ))}

              <Link
                href={item.link}
                target="blank"
                className="transition-opacity hover:opacity-75"
              >
                <GlobeAltIcon width={32} height={32} />
              </Link>

              {item.link2 && (
                <Link
                  href={item.link2}
                  target="blank"
                  className="transition-opacity hover:opacity-75"
                >
                  <PhotoIcon width={32} height={32} />
                </Link>
              )}
            </div>
          </div>
          <div className="flex flex-col w-full h-full justify-center items-center gap-2 bg-indigo-900">
            <span
              className="text-white/80 text-sm px-8 text-center"
              dangerouslySetInnerHTML={{
                __html: item.services as string,
              }}
            />
            <div className="flex flex-col justify-center items-center gap-2 w-full mt-6 px-2 text-white/70">
              {item.bullets.map((bullet, index) => (
                <p
                  key={index}
                  className="flex items-center justify-center text-xs text-center gap-2 bg-skeletor-dark-violet/50 w-full h-12 p-3 px-6 rounded-full"
                >
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
    <div className="flex flex-col  gap-10">
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
            <div className="flex flex-col justify-between items-center w-full h-full transition-all opacity-0 hover:opacity-100">
              <div className="flex flex-col w-full h-full justify-center items-center gap-2 bg-[#10131B]/95 backdrop-blur-md">
                <Image
                  src={item.src}
                  width={140}
                  height={140}
                  alt={item.title}
                />
                <p className="text-3xl text-violet-300 font-semibold">
                  {item.title}
                </p>

                <p className="text-lg text-center text-white/70 mt-[-6px]">
                  {item.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-indigo-600">
                  {item.chains.map((chain, chainIndex) => (
                    <Badge key={chainIndex} text={chain} big />
                  ))}

                  <Link
                    href={item.link}
                    target="blank"
                    className="transition-opacity hover:opacity-75"
                  >
                    <GlobeAltIcon width={32} height={32} />
                  </Link>

                  {item.link2 && (
                    <Link
                      href={item.link2}
                      target="blank"
                      className="transition-opacity hover:opacity-75"
                    >
                      <PhotoIcon width={32} height={32} />
                    </Link>
                  )}
                </div>
              </div>
              <div className="flex flex-col w-full h-full justify-center items-center gap-2 bg-indigo-900">
                <span
                  className="text-white text-lg px-8 text-center"
                  dangerouslySetInnerHTML={{
                    __html: item.services as string,
                  }}
                />
                <div className="flex flex-col justify-center items-center gap-2 w-full mt-6 px-4 text-white/70">
                  {item.bullets.map((bullet, index) => (
                    <p
                      key={index}
                      className="flex justify-between items-center text-sm gap-2 bg-skeletor-dark-violet/50 w-full p-3 rounded-full border border-skeletor-dark-violet/20"
                    >
                      <ArrowRightCircleIcon
                        width={24}
                        height={24}
                        className="text-violet-300"
                      />

                      {bullet}

                      <ArrowLeftCircleIcon
                        width={24}
                        height={24}
                        className="text-violet-300"
                      />
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
