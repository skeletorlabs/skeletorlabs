import { Plus_Jakarta_Sans } from "next/font/google";
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

interface Subtitle {
  text: string;
  description: string;
}

export default function Subtitle({ text, description }: Subtitle) {
  return (
    <div className="flex items-center gap-6">
      <span className="text-[34px] font-bold bg-violet-200 p-[5px] px-2 text-black">
        {">"}
      </span>
      <div className="flex flex-col gap-1">
        <span
          className={`text-4xl font-bold text-violet-200 ${jakarta.className}`}
        >
          {text}
        </span>
        <span className="text-xl text-violet-100/70">{description}</span>
      </div>
    </div>
  );
}
