import Link from "next/link";
import Subtitle from "../subtitle";
import Image from "next/image";
import Badge from "../badge";
import AliceCarousel from "react-alice-carousel";
import Loading from "../loading";
import { useEffect, useState } from "react";

const contributions = [
  {
    title: "L2VE",
    description:
      "100% degen-approved meme farming platform — built & launched on Base",
    src: "/l2ve.svg",
    chains: ["Base"],
    link: "http://l2ve.com",
  },
  {
    title: "Anonymous",
    description:
      "Custom token and lottery mechanics, subgraph infra, and frontend integration on Arbitrum",
    // src: "/anonymous.svg",
    src: "anonymous-v3.svg",
    chains: ["Arbitrum One"],
    link: "#",
  },
  {
    title: "Anonymous",
    description: "Meme token, staking & airdrop contracts + dapp",
    // src: "/anonymous.svg",
    src: "anonymous-v3.svg",
    chains: ["Optimism"],
    link: "#",
  },
  {
    title: "Anonymous",
    description:
      "Token deployment and airdrop infrastructure delivered for Sonic ecosystem",
    // src: "/anonymous.svg",
    src: "anonymous-v3.svg",
    chains: ["Sonic"],
    link: "#",
  },
];

export default function Contributions() {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<JSX.Element[] | undefined>(undefined);

  useEffect(() => {
    const _items = contributions.map((item, index) => (
      <Link
        key={index}
        href={item.link}
        target="blank"
        className="flex flex-col items-center justify-center w-full gap-1 odd:bg-[#2F2F55]/30 even:bg-skeletor-gray/60 backdrop-blur-md border border-neutral-800 p-6 rounded-xl transition-transform duration-200 hover:opacity-90 shadow-lg"
      >
        <div className="flex items-center justify-center  backdrop-blur-sm border border-neutral-900 w-[160px] h-[160px] rounded-full">
          <Image src={item.src} width={130} height={130} alt={"#"} />
        </div>
        <p className="text-xl text-violet-300">{item.title}</p>
        <div className="flex items-center gap-2 text-xs text-violet-200">
          {item.chains.map((chain, chainIndex) => (
            <Badge key={chainIndex} text={chain} />
          ))}
        </div>
        <p className="text-center mt-2 text-white/70 min-h-[80px]">
          {item.description}
        </p>
      </Link>
    ));

    setItems(_items);
    setLoading(false);
  }, [setLoading]);

  return (
    <div className="flex flex-col px-8 xl:px-14 py-10 gap-10">
      <Subtitle
        text="Contributions"
        description="Hands-on development for tokens, contracts, and dApps across partner ecosystems"
      />

      {/* MOBILE */}
      <div className="flex xl:hidden flex-row justify-between items-center flex-wrap gap-4">
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
      <div className="hidden xl:flex flex-row justify-between items-center flex-wrap gap-4">
        {contributions.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            target="blank"
            className="flex flex-col items-center justify-center gap-1 odd:bg-[#2F2F55]/30 even:bg-skeletor-gray/60 backdrop-blur-md border border-neutral-800 p-6 rounded-xl transition-transform duration-200 hover:scale-[1.04] hover:opacity-90 shadow-lg"
          >
            <div className="flex items-center justify-center  backdrop-blur-sm border border-neutral-900 w-[160px] h-[160px] rounded-full">
              <Image src={item.src} width={130} height={130} alt={"#"} />
            </div>
            <p className="text-xl text-violet-300">{item.title}</p>
            <div className="flex items-center gap-2 text-xs text-violet-200">
              {item.chains.map((chain, chainIndex) => (
                <Badge key={chainIndex} text={chain} />
              ))}
            </div>
            <p className="text-sm w-[200px] text-center mt-2 text-white/70 min-h-[80px]">
              {item.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
