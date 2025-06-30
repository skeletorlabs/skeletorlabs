import { StateContext } from "@/app/context/state";
import { PencilSquareIcon } from "@heroicons/react/20/solid";
import { Fragment, useContext } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import classNames from "classnames";
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

interface NewTestimonialButton {
  nobg?: boolean;
  invert?: boolean;
}
export default function NewTestimonialButton({
  nobg,
  invert,
}: NewTestimonialButton) {
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
        className={classNames({
          "hidden xl:flex items-center justify-center gap-1 p-2 px-6 rounded-full relative":
            true,
          [jakarta.className]: true,
          "bg-transparent text-violet-300 transition-colors hover:text-violet-200":
            nobg,
          "font-semibold bg-violet-300 border border-violet-400 transition-colors hover:bg-violet-200 text-black/80":
            !nobg && !invert,
          "font-semibold bg-violet-950/80 border border-white/10 transition-colors text-white/80 hover:opacity-90 hover:text-white":
            !nobg && invert,
        })}
      >
        <PencilSquareIcon width={20} height={20} />
        <span>Write Testimonial</span>
      </button>
    </Fragment>
  );
}
