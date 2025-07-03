import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import { Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";
import { shortener } from "../utils/shortener";
import { getAvatar } from "../lib/avatar";
import classNames from "classnames";
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function Connected() {
  const { open } = useAppKit();
  const { address } = useAppKitAccount();

  return (
    <button
      onClick={() => open()}
      className={classNames({
        "flex items-center justify-center gap-2 p-2 px-6 rounded-full text-xs relative font-semibold bg-white/5 backdrop-blur-sm border border-violet-400/10 transition-colors hover:bg-white/10 text-white":
          true,
        [jakarta.className]: true,
        hidden: !address,
      })}
    >
      <Image
        src={getAvatar(address!)}
        width={22}
        height={22}
        alt="avatar"
        className="rounded-full border border-violet-300"
      />

      <span>{shortener(address!, 6)}</span>
    </button>
  );
}
