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
    title: "Samurai Starter",
    description:
      "Leading early-stage crowdfunding platform that incentivizes community members to invest and participate in the most innovative projects in the crypto space.",
    src: "/samurai.svg",
    bg: "/onering-notebook.png",
    chains: ["Base", "Sonic"],
    link: "http://samuraistarter.com",
    link2: "https://opensea.io/collection/samuraistarter",
    timeframe: "2023-Present",
    position: "CTO - Blockchain Engineer",
  },
  {
    title: "One Ring",
    description:
      "One Ring is a Multi-Chain Cross-Stable Yield Optimizer Platform. Forget about spending hours looking for the best farms out there.",
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
        className={`flex xl:hidden flex-col items-center justify-center w-full h-[500px] ${
          index === 0 ? "bg-samurai" : "bg-onering "
        } bg-cover bg-no-repeat relative`}
      >
        <div className="flex flex-col justify-center items-center bg-black/70 w-full h-full gap-2">
          <div className="flex items-center justify-center bg-black border border-white/10 w-[160px] h-[160px] rounded-xl">
            <Image
              src={item.src}
              width={110}
              height={110}
              alt={"#"}
              className="w-[110px] h-[110px]"
            />
          </div>
          <p className="text-2xl text-violet-300">{item.title}</p>
          <p>{item.position}</p>
          <div className="flex items-center gap-2">
            {item.chains.map((chain, chainIndex) => (
              <Badge key={chainIndex} text={chain} />
            ))}
          </div>
          <p className="flex items-center justify-center text-center text-white/70 p-2 px-6 !leading-[28px]">
            {item.description}
          </p>
          <div className="flex items-center gap-5">
            <Link
              href={item.link}
              target="blank"
              className="flex items-center gap-2 transition-opacity hover:opacity-75"
            >
              <GlobeAltIcon width={24} height={24} />
              <span>Dapp</span>
            </Link>

            {item.link2 && (
              <Link
                href={item.link2}
                target="blank"
                className="flex items-center gap-2 transition-opacity hover:opacity-75"
              >
                <PhotoIcon width={24} height={24} />
                <span>NFT Collection</span>
              </Link>
            )}
          </div>
          <span className="absolute top-0 right-0 ml-1 text-sm bg-black/80 text-white/70 px-2 py-1">
            {item.timeframe}
          </span>
        </div>
      </div>
    ));

    setItems(_items);
    setLoading(false);
  }, [setLoading]);
  return (
    <div className="flex flex-col  gap-10">
      <Subtitle
        text="Companies"
        description="Current/Past full-time experiences in blockchain companies since 2021"
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
            } bg-contain bg-no-repeat hover:opacity-90 relative`}
          >
            <div className="flex flex-col justify-center items-center bg-black/90 w-full h-full transition-all opacity-0 hover:opacity-100 gap-2">
              <div className="flex items-center justify-center bg-skeletor-dark-violet border border-white/5 w-[160px] h-[160px] rounded-xl">
                <Image
                  src={item.src}
                  width={110}
                  height={110}
                  alt={"#"}
                  className="w-[110px] h-[110px]"
                />
              </div>
              <p className="text-2xl text-violet-300">{item.title}</p>
              <p>{item.position}</p>
              <div className="flex items-center gap-2 text-xs text-violet-200">
                {item.chains.map((chain, chainIndex) => (
                  <Badge key={chainIndex} text={chain} big />
                ))}
              </div>
              <p className="flex items-center justify-center text-lg w-[400px] h-[130px] text-center text-white/70 min-h-[50px] p-2">
                {item.description}
              </p>
              <div className="flex items-center gap-5">
                <Link
                  href={item.link}
                  target="blank"
                  className="flex items-center gap-2 transition-opacity hover:opacity-75"
                >
                  <GlobeAltIcon width={24} height={24} />
                  <span>Dapp</span>
                </Link>

                {item.link2 && (
                  <Link
                    href={item.link2}
                    target="blank"
                    className="flex items-center gap-2 transition-opacity hover:opacity-75"
                  >
                    <PhotoIcon width={24} height={24} />
                    <span>NFT Collection</span>
                  </Link>
                )}
              </div>
              <span className="absolute top-0 right-0 ml-1 text-sm bg-black/80 text-white/70 px-2 py-1 rounded-tr-xl">
                {item.timeframe}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
