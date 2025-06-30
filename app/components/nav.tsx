import Image from "next/image";
import Link from "next/link";
import NewTestimonialButton from "./home/newTestimonialButton";
import { SOCIALS } from "../utils/conts";

export default function Nav() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between mt-10 px-8 xl:px-14">
      <Image
        src="/logo-text.svg"
        width={277}
        height={77}
        alt="logo"
        className="transition-all scale-90 md:scale-100"
      />

      <div className="hidden md:block">
        <NewTestimonialButton />
      </div>
    </div>
  );
}
