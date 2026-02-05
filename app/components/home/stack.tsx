import Link from "next/link";
import Subtitle from "../subtitle";
import Image from "next/image";
import AutoScroll from "../autoScroll";

const stack = [
  {
    name: "Chainlink",
    href: "https://chain.link/",
    src: "/stack/CHAINLINK.svg",
  },
  {
    name: "Ethers.Js",
    href: "https://ethers.org/",
    src: "/stack/ETHERS.svg",
  },
  {
    name: "Foundry",
    href: "https://book.getfoundry.sh/",
    src: "/stack/FOUNDRY.svg",
  },
  {
    name: "Go",
    href: "https://go.dev/",
    src: "/stack/GO.svg",
  },
  {
    name: "Hardhat",
    href: "https://hardhat.org/",
    src: "/stack/HARDHAT.svg",
  },
  {
    name: "Metamask",
    href: "https://metamask.io/",
    src: "/stack/METAMASK.svg",
  },
  {
    name: "NextJs",
    href: "https://nextjs.org/",
    src: "/stack/NEXT.svg",
  },
  {
    name: "Node.Js",
    href: "https://nodejs.org/",
    src: "/stack/NODE.svg",
  },
  {
    name: "Open Zeppelin",
    href: "https://www.openzeppelin.com/",
    src: "/stack/OZ.svg",
  },
  {
    name: "Rabby",
    href: "https://rabby.io/",
    src: "/stack/RABBY.svg",
  },
  {
    name: "React Native",
    href: "https://reactnative.dev/",
    src: "/stack/REACT-NATIVE.svg",
  },
  {
    name: "ReactJs",
    href: "https://react.dev/",
    src: "/stack/REACT.svg",
  },
  {
    name: "Reown Toolkits",
    href: "https://reown.com/",
    src: "/stack/REOWN.svg",
  },
  {
    name: "Solidity",
    href: "https://soliditylang.org/",
    src: "/stack/SOLIDITY.svg",
  },
  {
    name: "Tailwind CSS",
    href: "https://tailwindcss.com/",
    src: "/stack/TAILWIND.svg",
  },
  {
    name: "The Graph",
    href: "https://thegraph.com/",
    src: "/stack/GRAPH.svg",
  },
  {
    name: "TypeScript",
    href: "https://typescriptlang.org/",
    src: "/stack/TYPESCRIPT.svg",
  },
];

export default function Stack() {
  return (
    <div className="flex flex-col bg-black/60 py-14 border-t border-b border-white/5 gap-14">
      <Subtitle
        text="Core Stack"
        description="Daily tools used across smart contract and dApp development"
        padding
      />
      <AutoScroll
        items={stack.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            target="blank"
            className="transition-transform duration-200 xl:hover:scale-[1.04] hover:opacity-90"
          >
            <div className="flex flex-col items-center justify-center gap-1 text-violet-200/70 hover:text-violet-200">
              <Image
                src={item.src}
                width={130}
                height={130}
                alt={item.href}
                className="w-[90px] h-[90px] xl:w-[130px] xl:h-[130px]"
              />
              <span className="text-xs xl:text-[16px]">{item.name}</span>
            </div>
          </Link>
        ))}
        rows={2}
      />
    </div>
  );
}
