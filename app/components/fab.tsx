import Link from "next/link";
import { SOCIALS } from "../utils/conts";
import { useContext } from "react";
import { StateContext } from "../context/state";
import { mail } from "../utils/svgs";
import { PencilSquareIcon } from "@heroicons/react/24/solid";

export default function FAB() {
  const { setTalkIsOpen, setTestimonialBoxIsOpen } = useContext(StateContext);
  return (
    <div
      className="
        hidden sm:flex flex-col items-end 
        fixed bottom-10 right-[-28px] 
        gap-2 scale-75 w-full max-w-[220px] overflow-hidden
      "
    >
      <button
        onClick={() => setTalkIsOpen(true)}
        className="
            transition-all duration-200 flex items-center w-[60px] pl-4
            bg-white/5 rounded-l-lg shadow-lg z-20 h-[50px] border border-r-none border-white/10
            hover:right-[-10px] hover:w-[80px] hover:bg-white/10 backdrop-blur-lg"
      >
        <PencilSquareIcon width={30} height={30} />
      </button>
      {SOCIALS.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          target="blank"
          className="
            transition-all duration-200 flex items-center w-[60px] pl-4
            bg-white/5 rounded-l-lg shadow-lg z-20 h-[50px] border border-r-none border-white/10
            hover:right-[-10px] hover:w-[80px] hover:bg-white/10 backdrop-blur-lg"
        >
          {item.icon}
        </Link>
      ))}
      <button
        onClick={() => setTestimonialBoxIsOpen(true)}
        className="
            transition-all duration-200 flex items-center w-[60px] pl-4
            bg-white/5 rounded-l-lg shadow-lg z-20 h-[50px] border border-r-none border-white/10
            hover:right-[-10px] hover:w-[80px] hover:bg-white/10 backdrop-blur-lg"
      >
        {mail}
      </button>
    </div>
  );
}
