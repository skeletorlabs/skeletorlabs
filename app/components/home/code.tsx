import Link from "next/link";
import Badge from "../badge";
import Subtitle from "../subtitle";
import { etherscan, github } from "@/app/utils/svgs";

const shipment = [
  {
    name: "Contract 1",
    usecase: "NFT Mint with ERC721A + Presale",
    summary:
      "Loren sit amet dolor ipsum, sit amet dolor ipsum. Loren sit amet dolor ipsum, sit amet dolor ipsum.",
    stacks: ["Solidity", "Foundry", "Subgraph"],
    github: "#",
    etherscan: "#",
  },
  {
    name: "Contract 2",
    usecase: "NFT Mint with ERC721A + Presale",
    summary:
      "Loren sit amet dolor ipsum, sit amet dolor ipsum. Loren sit amet dolor ipsum, sit amet dolor ipsum.",
    stacks: ["Solidity", "Foundry", "Subgraph"],
    github: "#",
    etherscan: "#",
  },
  {
    name: "Contract 3",
    usecase: "NFT Mint with ERC721A + Presale",
    summary:
      "Loren sit amet dolor ipsum, sit amet dolor ipsum. Loren sit amet dolor ipsum, sit amet dolor ipsum.",
    stacks: ["Solidity", "Foundry", "Subgraph"],
    github: "#",
    etherscan: "#",
  },
  {
    name: "Contract 4",
    usecase: "NFT Mint with ERC721A + Presale",
    summary:
      "Loren sit amet dolor ipsum, sit amet dolor ipsum. Loren sit amet dolor ipsum, sit amet dolor ipsum.",
    stacks: ["Solidity", "Foundry", "Subgraph"],
    github: "#",
    etherscan: "#",
  },
  {
    name: "Contract 5",
    usecase: "NFT Mint with ERC721A + Presale",
    summary:
      "Loren sit amet dolor ipsum, sit amet dolor ipsum. Loren sit amet dolor ipsum, sit amet dolor ipsum.",
    stacks: ["Solidity", "Foundry", "Subgraph"],
    github: "#",
    etherscan: "#",
  },
  {
    name: "Contract 6",
    usecase: "NFT Mint with ERC721A + Presale",
    summary:
      "Loren sit amet dolor ipsum, sit amet dolor ipsum. Loren sit amet dolor ipsum, sit amet dolor ipsum.",
    stacks: ["Solidity", "Foundry", "Subgraph"],
    github: "#",
    etherscan: "#",
  },
];

export default function Code() {
  return (
    <div className="flex flex-col bg-black/10 px-8 xl:px-14 py-10 border-t border-white/5 gap-10">
      <Subtitle
        text="Shipped Code"
        description="Some important codes & products shipped"
      />
      <div className="flex flex-col xl:flex-row items-center gap-2 xl:gap-8 flex-wrap">
        {shipment.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center gap-1 w-full xl:w-[330px] even:bg-[#222338]/50 odd:bg-[#222338] backdrop-blur-sm border even:border-neutral-800 odd:border-violet-900/30 p-6 rounded-xl transition-transform hover:scale-[1.04] hover:opacity-90"
          >
            <p className="text-xl text-violet-300">{item.name}</p>
            <p className="text-sm text-white/70">{item.usecase}</p>
            <div className="flex items-center gap-2 text-xs text-violet-200">
              {item.stacks.map((stack, stackIndex) => (
                <Badge key={stackIndex} text={stack} />
              ))}
            </div>
            <p className="text-sm w-[260px] h-[80px] text-center mt-2 text-white/70 min-h-[50px]">
              {item.summary}
            </p>
            <div className="flex items-center justify-end w-full gap-2">
              <Link
                href={item.etherscan}
                className="bg-white rounded-full hover:opacity-75"
              >
                {etherscan}
              </Link>
              <Link href={item.github} className=" hover:opacity-75">
                {github}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
