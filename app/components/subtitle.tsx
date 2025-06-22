import { Plus_Jakarta_Sans } from "next/font/google";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

interface Subtitle {
  text: string;
  description: string;
  padding?: boolean;
}

export default function Subtitle({ text, description, padding }: Subtitle) {
  return (
    <div
      className={`flex items-center gap-2 xl:gap-4 ${
        padding && "px-8 xl:px-14"
      }`}
    >
      <ArrowRightCircleIcon
        width={64}
        height={64}
        className="text-violet-300 min-w-[44px] min-h-[44px] w-[44px] h-[44px] xl:min-w-[64px] xl:min-h-[64px] xl:w-[64px] xl:h-[64px]"
      />
      <div className="flex flex-col">
        <span
          className={`text-xl xl:text-3xl font-bold text-violet-200 ${jakarta.className}`}
        >
          {text}
        </span>
        <span className="text-sm xl:text-lg text-violet-100/70">
          {description}
        </span>
      </div>
    </div>
  );
}
