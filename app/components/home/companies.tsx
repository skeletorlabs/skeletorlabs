import Link from "next/link";
import Subtitle from "../subtitle";
import Badge from "../badge";
import Image from "next/image";
import { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import Loading from "../loading";
import {
  CheckCircleIcon,
  GlobeAltIcon,
  PhotoIcon,
} from "@heroicons/react/24/solid";

const companies = [
  {
    title: "SAMURAI STARTER",
    description: "Leading early-stage crowdfunding platform.",
    services:
      "Skeletor Labs contributed to the development of Samurai Starter by delivering smart contract systems supporting NFT-based vesting, funding logic, and protocol governance.",
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
    services:
      "Skeletor Labs supported OneRing with protocol architecture and execution, focusing on secure relayer logic, bridge contracts, and multi-chain integration strategies.",
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
        className="flex xl:hidden flex-col justify-center items-center bg-[#10131B]/95 backdrop-blur-md w-full h-full transition-all"
      >
        <div className="flex flex-col gap-1 py-4 justify-center items-center">
          <Image
            src={item.src}
            width={110}
            height={110}
            alt={"#"}
            className="w-[140px] h-[140px]"
          />
          <p className="mt-1 text-2xl text-violet-300 font-semibold">
            {item.title}
          </p>

          <p className="text-sm text-center text-white px-4">
            {item.description}
          </p>
          <div className="flex items-center gap-2 text-xs text-indigo-600">
            {item.chains.map((chain, chainIndex) => (
              <Badge key={chainIndex} text={chain} />
            ))}

            <Link
              href={item.link}
              target="blank"
              className="transition-opacity hover:opacity-75"
            >
              <GlobeAltIcon width={24} height={24} />
            </Link>

            {item.link2 && (
              <Link
                href={item.link2}
                target="blank"
                className="transition-opacity hover:opacity-75"
              >
                <PhotoIcon width={24} height={24} />
              </Link>
            )}
          </div>
        </div>

        <p className="text-white/70 px-6 py-8 text-center font-light text-sm bg-skeletor-dark-violet">
          {item.services}
        </p>

        <div className="flex flex-col gap-2 px-6 py-6 text-white/70">
          {item.bullets.map((bullet, index) => (
            <p key={index} className="flex items-center gap-2 text-xs">
              <CheckCircleIcon
                width={20}
                height={20}
                className="text-violet-300 min-w-[20px] min-h-[20px]"
              />
              {bullet}
            </p>
          ))}
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
      <div className="flex xl:hidden flex-col xl:flex-row items-center px-0 backdrop-blur-sm">
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
      <div className="hidden xl:flex flex-col xl:flex-row items-center px-0 backdrop-blur-sm">
        {companies.map((item, index) => (
          <div
            key={index}
            className={`hidden xl:flex flex-col items-center justify-center w-full h-[700px] ${
              index === 0 ? "bg-samurai" : "bg-onering "
            } bg-cover bg-no-repeat hover:opacity-90 relative`}
          >
            <div className="flex flex-col justify-center items-center bg-[#10131B]/95 backdrop-blur-md w-full h-full transition-all opacity-0 hover:opacity-100 gap-2">
              <Image
                src={item.src}
                width={110}
                height={110}
                alt={"#"}
                className="w-[180px] h-[180px]"
              />
              {/* </div> */}
              <p className="mt-1 text-3xl text-violet-300 font-semibold">
                {item.title}
              </p>

              <p className="text-lg text-center text-white mt-1">
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

              <p className="text-violet-100/90 italic px-8 py-8 my-8 text-center bg-skeletor-dark-violet">
                {item.services}
              </p>

              <div className="flex flex-col justify-center gap-2 w-full h-max px-10 mt-1 text-white/70">
                {item.bullets.map((bullet, index) => (
                  <p key={index} className="flex items-center gap-2">
                    <CheckCircleIcon
                      width={24}
                      height={24}
                      className="text-indigo-500"
                    />
                    {bullet}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
