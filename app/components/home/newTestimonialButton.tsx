import { StateContext } from "@/app/context/state";
import { PencilSquareIcon } from "@heroicons/react/20/solid";
import { Fragment, useContext } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

interface NewTestimonialButton {
  nobg?: boolean;
}
export default function NewTestimonialButton({ nobg }: NewTestimonialButton) {
  const { setTestimonialBoxIsOpen } = useContext(StateContext);
  return (
    <Fragment>
      {/* MOBILE */}
      <button
        onClick={() => setTestimonialBoxIsOpen(true)}
        className={`flex xl:hidden items-center justify-center gap-2 p-1 px-3 text-xs ${
          nobg
            ? "bg-transparent text-violet-300"
            : "bg-violet-300 text-black/80"
        } font-semibold rounded-full ${jakarta.className}`}
      >
        <PencilSquareIcon width={20} height={20} />
        <span>Write Testimonial</span>
      </button>

      {/* DESKTOP */}
      <button
        onClick={() => setTestimonialBoxIsOpen(true)}
        className={`hidden xl:flex items-center justify-center gap-1 p-2 px-6 ${
          nobg
            ? "bg-transparent text-violet-300 transition-colors hover:text-violet-200"
            : "font-semibold bg-violet-300 border border-violet-400 transition-colors hover:bg-violet-200 text-black/80"
        } rounded-full relative ${jakarta.className}`}
      >
        <PencilSquareIcon width={20} height={20} />
        <span>Write Testimonial</span>
      </button>
    </Fragment>
  );
}
