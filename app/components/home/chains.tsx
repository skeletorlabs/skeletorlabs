import Link from "next/link";
import Subtitle from "../subtitle";
import Image from "next/image";
import AutoScroll from "../autoScroll";

const chains = [
  {
    name: "Arbitrum",
    src: "/chains/arbitrum.svg",
    href: "https://arbitrum.io/",
  },
  {
    name: "Base",
    src: "/chains/base.svg",
    href: "https://base.org",
  },
  {
    name: "BSC",
    src: "/chains/bsc.svg",
    href: "https://www.bnbchain.org/",
  },
  {
    name: "Ethereum",
    src: "/chains/ethereum.svg",
    href: "https://ethereum.org/en/",
  },
  {
    name: "Fantom",
    src: "/chains/fantom.svg",
    href: "https://fantom.foundation/",
  },
  {
    name: "Hedera",
    src: "/chains/hedera.svg",
    href: "https://fantom.foundation/",
  },
  {
    name: "Optimism",
    src: "/chains/optimism.svg",
    href: "https://www.optimism.io/",
  },
  {
    name: "Polygon",
    src: "/chains/polygon.svg",
    href: "https://polygon.technology/",
  },
  { name: "Solana", src: "/chains/solana.svg", href: "https://solana.com/" },
  {
    name: "Sonic",
    src: "/chains/sonic.svg",
    href: "https://www.soniclabs.com/",
  },
];

export default function Chains() {
  return (
    <div className="flex flex-col bg-violet-500/10  py-20 border-t border-b border-white/5 gap-14 mt-10 md:mt-0">
      <Subtitle
        text="Multi-Chain Reach"
        description="Active production deployments across major L1s and L2s"
        padding
      />
      <AutoScroll
        items={chains.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            target="blank"
            className="transition-transform duration-200 xl:hover:scale-[1.04] hover:opacity-90"
          >
            <div className="flex flex-col items-center justify-between gap-3 text-violet-200/70 hover:text-violet-200">
              <Image
                src={item.src}
                width={110}
                height={110}
                alt={item.name}
                className="w-[90px] h-[90px] xl:w-[110px] xl:h-[110px]"
              />
              <span className="text-xs xl:text-[16px]">{item.name}</span>
            </div>
          </Link>
        ))}
      />
    </div>
  );
}
