import { Plus_Jakarta_Sans } from "next/font/google";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import { Fragment } from "react";
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

interface Subtitle {
  text: string;
  description: string;
  padding?: boolean;
}

export default function Subtitle({ text, description, padding }: Subtitle) {
  return (
    <Fragment>
      {/* MOBILE */}
      <div className="flex xl:hidden flex-col items-center text-center gap-1 z-30">
        <div className="flex items-center gap-2">
          <ArrowRightCircleIcon
            width={32}
            height={32}
            className="text-violet-300"
          />
          <span
            className={`text-2xl font-bold text-violet-200 ${jakarta.className}`}
          >
            {text}
          </span>
        </div>

        <span className="leading-snug text-violet-100/70 px-8">
          {description}
        </span>
      </div>

      {/* DESKTOP */}
      <div
        className={`hidden xl:flex items-center gap-4 z-30 ${padding && "px-14"}`}
      >
        <ArrowRightCircleIcon
          width={64}
          height={64}
          className="text-violet-300 min-w-[64px] min-h-[64px] w-[64px] h-[64px]"
        />
        <div className="flex flex-col">
          <span
            className={`text-3xl font-bold text-violet-200 ${jakarta.className}`}
          >
            {text}
          </span>
          <span className="text-lg leading-normal text-violet-100/70 text-shadow-lg">
            {description}
          </span>
        </div>
      </div>
    </Fragment>
  );
}
