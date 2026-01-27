import Link from "next/link";
import Badge from "../badge";
import Subtitle from "../subtitle";
import AliceCarousel from "react-alice-carousel";
import { useEffect, useState } from "react";
import Loading from "../loading";
import { CHAIN_ID_TO_ICON } from "@/app/utils/conts";
import Image from "next/image";

const shipment = [
  {
    name: "Samurai Lock v2",
    usecase: "Stake $SAM to get Samurai Points",
    summary:
      "A token-locking smart contract that allows users to stake $SAM tokens in exchange for Samurai Points. These points are used across the ecosystem for loyalty rewards, ranking, and feature access. Includes an emergency withdrawal function and integrates tightly with the PointsBridge contract.",
    stacks: ["Foundry", "Solidity", "Tests"],
    etherscan:
      "https://basescan.org/address/0xA5c6584d6115cC26C956834849B4051bd200973a",
    chain: 8453,
  },
  {
    name: "Giveaways",
    usecase: "Samurai Points holders access raffles and giveaways",
    summary:
      "A contract that manages periodic giveaways among users who have accumulated Samurai Points. Points act as raffle tickets, and winners are chosen via verifiable randomness. Helps increase engagement and rewards active users in the ecosystem.",
    stacks: ["Foundry", "Solidity", "Tests"],
    etherscan:
      "https://basescan.org/address/0xd1E65dF048784200CD1A458615438945a4568b59",
    chain: 8453,
  },
  {
    name: "IDO Participator",
    usecase: "USDC payment gateway for IDO participation",
    summary:
      "A smart contract that allows users to participate in IDOs by sending USDC. Tracks participant allocations and funds raised. Used in conjunction with vesting contracts to enable claimable token distributions over time, post-IDO.",
    stacks: ["Foundry", "Solidity", "Tests"],
    etherscan:
      "https://basescan.org/address/0x3A76C6e3e6a0B136eE92b66B9Ba25d099BBC5882",
    chain: 8453,
  },
  {
    name: "IDO Vesting",
    usecase: "TGE & Vesting logic for IDO participants",
    summary:
      "Smart contract that handles token vesting for IDO participants, supporting cliff, TGE, and [Cliff | Linear | Periodic] releases. Ensures tokens are claimable over time and prevents frontloading by investors. Also distribute Samurai Points based on purchased amount in IDO Tokens",
    stacks: ["Foundry", "Solidity", "Tests"],
    etherscan:
      "https://basescan.org/address/0x8C8Fa0152eFF48700c9e10b64aCa1B81f259F54B",
    chain: 8453,
  },
  {
    name: "Samurai Tiers",
    usecase: "Defines user tiers based on locked assets",
    summary:
      "Smart contract that categorizes users into tiers based on their $SAM token locks, SAM NFT locks, or LP positions on Aerodrome. These tiers are used to determine benefits like IDO participation levels or community privileges.",
    stacks: ["Foundry", "Solidity", "Tests"],
    etherscan:
      "https://basescan.org/address/0x0E7E40385E9b7e629c504996Bdd36a3b51Ed0525",
    chain: 8453,
  },
  {
    name: "SamNFT Lock",
    usecase: "Locks Samurai NFTs to earn loyalty rewards",
    summary:
      "Allows users to lock their Samurai NFTs for a defined period in exchange for rewards or boosted points. Locking prevents transfer during the period and increases commitment. Designed to increase NFT retention and long-term user engagement.",
    stacks: ["Foundry", "Solidity", "Tests"],
    etherscan:
      "https://basescan.org/address/0x45c085699fe78873d5c28b02d153cfd90379e424",
  },
];
const responsive = {
  0: { items: 1 },
  1260: { items: 3 },
};

export default function Code() {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState<JSX.Element[] | undefined>(undefined);

  useEffect(() => {
    const _items = shipment.map((item, index) => (
      <div
        key={index}
        className="flex flex-col items-center justify-between text-center even:bg-skeletor-gray odd:bg-skeletor-gray/50 backdrop-blur-sm border even:border-white/10 odd:border-white/5 py-6 rounded-xl transition-transform duration-200 hover:opacity-90 min-h-[400px] gap-3"
      >
        <p className="text-xl text-violet-300 font-semibold">{item.name}</p>
        <p className="flex items-center justify-center min-h-[70px] bg-white/5 w-full p-2 text-sm text-white/70">
          {item.usecase}
        </p>

        <div className="flex items-center gap-2 mt-2">
          {item.stacks.map((stack, stackIndex) => (
            <Badge key={stackIndex} text={stack} big />
          ))}
        </div>

        <p className="text-sm text-white/70 !leading-[24px] px-6">
          {item.summary}
        </p>

        <div className="flex items-center justify-end w-full pt-2  px-6">
          <Link
            href={item.etherscan}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-[2px] rounded-full hover:opacity-75"
          >
            <Image
              src={CHAIN_ID_TO_ICON[item.chain || 8453]}
              width={24}
              height={24}
              alt="Etherscan"
              className="text-violet-300"
            />
          </Link>
        </div>
      </div>
    ));

    setItems(_items);
    setLoading(false);
  }, [setLoading]);
  return (
    <div className="flex flex-col bg-black/10 px-4 xl:px-14 py-10 border-t border-white/5 gap-10 mt-10">
      <Subtitle
        text="What We've Deployed"
        description="From design to deployment — key smart contracts shipped to mainnet"
      />
      <div className="flex flex-col xl:flex-row items-center flex-wrap">
        {loading ? (
          <div className="flex w-full items-center justify-center min-h-[360px]">
            <Loading />
          </div>
        ) : (
          <AliceCarousel
            responsive={responsive}
            disableButtonsControls
            autoPlay
            autoPlayInterval={3000}
            infinite
          >
            {items}
          </AliceCarousel>
        )}
      </div>
    </div>
  );
}
