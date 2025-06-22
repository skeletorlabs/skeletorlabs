import Link from "next/link";
import Subtitle from "../subtitle";
import Image from "next/image";

const stack = [
  {
    name: "Foundry",
    href: "https://book.getfoundry.sh/",
    src: "/stack/FOUNDRY.svg",
  },
  { name: "The Graph", href: "https://thegraph.com/", src: "/stack/GRAPH.svg" },
  { name: "Hardhat", href: "https://hardhat.org/", src: "/stack/HARDHAT.svg" },
  { name: "NextJs", href: "https://nextjs.org/", src: "/stack/NEXT.svg" },
  {
    name: "Open Zeppelin",
    href: "https://www.openzeppelin.com/",
    src: "/stack/OZ.svg",
  },
  { name: "React", href: "https://react.dev/", src: "/stack/REACT.svg" },
  {
    name: "Remix",
    href: "https://remix.ethereum.org/",
    src: "/stack/REMIX.svg",
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
  { name: "Vercel", href: "https://vercel.com/", src: "/stack/VERCEL.svg" },
];

export default function Stack() {
  return (
    <div className="flex flex-col bg-black/60 px-8 xl:px-14 py-14 border-t border-b border-white/5 gap-14">
      <Subtitle
        text="Languages & Tools"
        description="The most used techs in development process"
      />
      <div className="flex flex-row items-center flex-wrap gap-6">
        {stack.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            target="blank"
            className="transition-transform hover:scale-[1.04] hover:opacity-90"
          >
            <div className="flex flex-col items-center justify-center gap-1 text-violet-200/70 hover:text-violet-200">
              <Image
                src={item.src}
                width={130}
                height={130}
                alt={item.href}
                className="w-[80px] h-[80px] xl:w-[130px] xl:h-[130px]"
              />
              <span className="text-xs xl:text-[16px]">{item.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
