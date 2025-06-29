import Image from "next/image";
import Link from "next/link";
import NewTestimonialButton from "./home/newTestimonialButton";
import { SOCIALS } from "../utils/conts";

export default function Nav() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between mt-10 md:mt-6 px-4 xl:px-14">
      <Image
        src="/logo-text.svg"
        width={276}
        height={75}
        alt="logo"
        className="w-[256px] h-[55px] md:w-[276px] md:h-[75px]"
      />

      <div className="hidden md:block">
        <NewTestimonialButton />
      </div>
    </div>
  );
}
