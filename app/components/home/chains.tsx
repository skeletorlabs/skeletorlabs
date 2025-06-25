import Link from "next/link";
import Subtitle from "../subtitle";
import Image from "next/image";

const chains = [
  {
    name: "Arbitrum",
    src: "/chains/arbitrum.svg",
  },
  {
    name: "Base",
    src: "/chains/base.svg",
  },
  {
    name: "BSC",
    src: "/chains/bsc.svg",
  },
  {
    name: "Ethereum",
    src: "/chains/ethereum.svg",
  },
  {
    name: "Fantom",
    src: "/chains/fantom.svg",
  },
  {
    name: "Optimism",
    src: "/chains/optimism.svg",
  },
  {
    name: "Polygon",
    src: "/chains/polygon.svg",
  },
  {
    name: "Sonic",
    src: "/chains/sonic.svg",
  },
];

export default function Chains() {
  return (
    <div className="flex flex-col bg-black/60 px-8 xl:px-14 py-14 border-t border-b border-white/5 gap-14">
      <Subtitle text="Chains" description="The latest EVM chains deployed" />
      <div className="flex flex-row items-center flex-wrap gap-6">
        {chains.map((item, index) => (
          <div
            key={index}
            className="transition-transform hover:scale-[1.04] hover:opacity-90"
          >
            <div className="flex flex-col items-center justify-between gap-3 text-violet-200/70 hover:text-violet-200">
              <Image
                src={item.src}
                width={110}
                height={110}
                alt={item.name}
                className="w-[80px] h-[80px] xl:w-[110px] xl:h-[110px]"
              />
              <span className="text-xs xl:text-[16px]">{item.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
