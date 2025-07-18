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
        className={`flex xl:hidden items-center justify-center gap-2 text-xs ${
          nobg
            ? "bg-transparent text-violet-300"
            : "bg-violet-300 text-black/80 p-1 px-3 "
        } font-semibold rounded-full ${jakarta.className}`}
      >
        <PencilSquareIcon width={20} height={20} />
        <span>Leave Feedback</span>
      </button>

      {/* DESKTOP */}
      <button
        onClick={() => setTestimonialBoxIsOpen(true)}
        className={classNames({
          "hidden xl:flex items-center justify-center gap-1 text-xs relative": true,
          [jakarta.className]: true,
          "bg-transparent text-violet-300 transition-colors duration-200 hover:text-violet-200":
            nobg,
          "p-2 px-6 rounded-full font-semibold bg-violet-300 border border-violet-400 transition-colors duration-200 hover:bg-violet-200 text-black/80":
            !nobg && !invert,
          "p-2 px-6 rounded-full font-semibold bg-violet-500/60 backdrop-blur-md border border-white/10 transition-colors duration-200 text-white/80 hover:opacity-90 hover:text-white":
            !nobg && invert,
        })}
      >
        <PencilSquareIcon width={20} height={20} />
        <span>Leave Feedback</span>
      </button>
    </Fragment>
  );
}
