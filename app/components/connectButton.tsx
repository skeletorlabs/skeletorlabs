import { WalletIcon } from "@heroicons/react/20/solid";
import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import { Plus_Jakarta_Sans } from "next/font/google";
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function ConnectButton() {
  const { open, close } = useAppKit();
  const { address } = useAppKitAccount();

  return (
    <button
      className={`flex items-center justify-center gap-2 p-2 px-6 bg-violet-300 transition-colors hover:bg-violet-200 text-black/80 font-semibold rounded-lg relative ${jakarta.className}`}
      onClick={() => (address ? close() : open())}
    >
      <WalletIcon width={20} height={20} />
      <span>{address ? "Disconnect" : "Connect Wallet"}</span>
    </button>
  );
}
