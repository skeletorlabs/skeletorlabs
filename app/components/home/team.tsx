import Link from "next/link";
import Subtitle from "../subtitle";
import Image from "next/image";
import classNames from "classnames";
import { Plus_Jakarta_Sans } from "next/font/google";
import AutoScroll from "../autoScroll";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

const members = [
  {
    name: "Lucas",
    nickname: "Skeletor",
    role: "CEO - Dev Master",
    description:
      "Master of the code and architect of chaos. Lucas leads Skeletor Labs with deep expertise in smart contracts, dApp engineering, and blockchain infrastructure. Builder of products, slayer of bugs, and commander of all things decentralized.",
    src: "/team/SKELETOR.svg",
    color: "bg-skeletor-dark-violet",
  },
  {
    name: "Anonymous",
    nickname: "Trap Jaw",
    role: "Token Engineer - Protocol Strategist",
    description:
      "Part machine, all mind. Trap Jaw designs tokenomics, builds launch plans, and sharpens the financial edge of any protocol. From memecoins to governance tokens, he crunches curves and optimizes for liquidity, emissions, and adoption.",
    src: "/team/TRAPJAW.svg",
    color: "bg-red-950",
  },
  {
    name: "Anonymous",
    nickname: "Mer-Man",
    role: "DeFi Ops & Liquidity Specialist",
    description:
      "Master of deep flows and darker pools. Mer-Man brings structure to the chaos with launch planning, treasury design, and liquidity management. Need sustainable incentives or anti-fragile DeFi architecture? He's your aquatic wizard.",
    src: "/team/MERMAN.svg",
    color: "bg-skeletor-green-merman",
  },
  {
    name: "Anonymous",
    nickname: "Evil-Lyn",
    role: "Creative Director - Visuals & Narrative",
    description:
      "Dark mistress of memes, vibes, and vision. Evil-Lyn conjures the style, the lore, and the digital soul behind every project. From NFT series to campaign storytelling, she blends aesthetics, weirdness, and storytelling into unstoppable brands.",
    src: "/team/EVILLYN.svg",
    color: "bg-violet-950",
  },
];

export default function Team() {
  return (
    <div className="flex flex-col py-10 gap-10">
      <Subtitle
        text="The Crew"
        description="Passionate minds crafting smart, secure, and scalable decentralized products"
        padding
      />

      <AutoScroll
        items={members.map((item, index) => (
          <div
            key={index}
            className={classNames({
              "flex flex-col items-center justify-center w-[350px] gap-1 backdrop-blur-md border border-white/10 pt-6 rounded-xl transition-transform duration-200 hover:opacity-90 shadow-lg": true,
              [item.color]: true,
            })}
          >
            <div className="flex items-center justify-center bg-black/30  backdrop-blur-sm border border-white/10 w-[160px] h-[160px] rounded-full">
              <Image
                src={item.src}
                width={130}
                height={130}
                alt={"#"}
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className={`text-xl text-violet-300 ${jakarta.className}`}>
                {item.nickname}
              </p>
              <p className="text-sm text-white mt-[-3px]">{item.name}</p>
            </div>
            <div className="flex flex-col items-center justify-center mt-1 gap-2">
              <p
                className={`text-sm font-semibold p-1 px-4 bg-black/50 text-white/70 border border-white/10 backdrop-blur-sm rounded-full ${jakarta.className}`}
              >
                {item.role}
              </p>
              <p className="text-sm text-center text-white/60 px-4 py-6 rounded-b-xl w-full h-full bg-black/70 font-sans">
                {item.description}
              </p>
            </div>
          </div>
        ))}
        slow
      />
    </div>
  );
}
