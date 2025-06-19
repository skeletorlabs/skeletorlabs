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
    <div className={`flex items-center gap-6 ${padding && "px-14"}`}>
      <ArrowRightCircleIcon
        width={64}
        height={64}
        className="text-violet-300"
      />
      <div className="flex flex-col">
        <span
          className={`text-3xl font-bold text-violet-200 ${jakarta.className}`}
        >
          {text}
        </span>
        <span className="text-lg text-violet-100/70">{description}</span>
      </div>
    </div>
  );
}
