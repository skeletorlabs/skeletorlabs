import Link from "next/link";
import Subtitle from "../subtitle";
import Badge from "../badge";
import Image from "next/image";

const companies = [
  {
    title: "Samurai Starter",
    description:
      "Leading early-stage crowdfunding platform that incentivizes community members to invest and participate in the most innovative projects in the crypto space.",
    src: "/samurai.svg",
    bg: "/onering-notebook.png",
    chains: ["Base", "Sonic"],
    link: "http://samuraistarter.com",
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
  return (
    <div className="flex flex-col py-10 gap-10">
      <Subtitle
        text="Companies"
        description="Current/Past full-time experiences in blockchain companies since 2021"
        padding
      />
      <div className="flex flex-col xl:flex-row items-center gap-8 xl:gap-0 px-8 xl:px-0 backdrop-blur-sm">
        {companies.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            target="blank"
            className={`flex flex-col items-center justify-center w-full h-[450px] xl:h-[700px] ${
              index === 0 ? "bg-samurai" : "bg-onering "
            } bg-cover xl:bg-contain bg-no-repeat hover:opacity-90 relative`}
          >
            <div className="flex flex-col justify-center items-center bg-black/90 w-full h-full transition-all opacity-90 xl:opacity-0 hover:opacity-100 gap-2">
              <div className="flex items-center justify-center bg-black border border-neutral-900 w-[130px] h-[130px] xl:w-[160px] xl:h-[160px] rounded-xl">
                <Image
                  src={item.src}
                  width={110}
                  height={110}
                  alt={"#"}
                  className="w-[80px] h-[80px] xl:w-[110px] xl:h-[110px]"
                />
              </div>
              <p className="text-4xl xl:text-2xl text-violet-300">
                {item.title}
              </p>
              <p>{item.position}</p>
              <div className="flex items-center gap-2 text-xs text-violet-200">
                {item.chains.map((chain, chainIndex) => (
                  <Badge key={chainIndex} text={chain} />
                ))}
              </div>
              <p className="flex items-center justify-center text-sm w-[400px] h-[130px] text-center text-white/70 min-h-[50px] p-2">
                {item.description}
              </p>
              <span className="absolute top-0 right-0 ml-1 text-sm bg-black/80 text-white/70 px-2 py-1 xl:rounded-tr-xl">
                {item.timeframe}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
