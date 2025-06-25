import Link from "next/link";
import Subtitle from "../subtitle";
import Image from "next/image";
import Badge from "../badge";

const contributions = [
  {
    title: "L2VE",
    description:
      "The only L2VE you need in your life. 100% degen approved Meme farming.",
    src: "/l2ve.svg",
    chains: ["Base"],
    link: "http://l2ve.com",
  },
  {
    title: "Anonymous",
    description: "Meme token, Lottery contracts + Custom TheGraph + dapp",
    src: "/anonymous.svg",
    chains: ["Arbitrum One"],
    link: "#",
  },

  {
    title: "Anonymous",
    description: "Meme token contracts + dapp",
    src: "/anonymous.svg",
    chains: ["Optimism"],
    link: "#",
  },
];

export default function Contributions() {
  return (
    <div className="flex flex-col px-8 xl:px-14 py-10 gap-10">
      <Subtitle
        text="Contributions"
        description="Latest tech development for projects"
      />
      <div className="flex flex-row items-center flex-wrap gap-4 xl:gap-16">
        {contributions.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            target="blank"
            className="flex flex-col items-center justify-center w-full xl:w-auto gap-1 odd:bg-[#2F2F55]/30 even:bg-[#222338]/60 backdrop-blur-md border border-neutral-800 p-6 rounded-xl transition-transform hover:scale-[1.04] hover:opacity-90 shadow-lg"
          >
            <div className="flex items-center justify-center bg-violet-200/50 backdrop-blur-sm border border-neutral-900 w-[160px] h-[160px] rounded-full">
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
