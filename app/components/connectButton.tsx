import { WalletIcon } from "@heroicons/react/20/solid";
import {
  useAppKit,
  useAppKitAccount,
  useDisconnect,
} from "@reown/appkit/react";
import { Plus_Jakarta_Sans } from "next/font/google";
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function ConnectButton() {
  const { open } = useAppKit();
  const { address } = useAppKitAccount();
  const { disconnect } = useDisconnect();

  return (
    <button
      className={`flex items-center justify-center gap-2 p-2 px-6 bg-violet-300 transition-colors duration-200 hover:bg-violet-200 text-black/80 font-semibold text-xs rounded-full relative ${jakarta.className}`}
      onClick={() => (address ? disconnect() : open())}
    >
      <WalletIcon width={20} height={20} />
      <span>{address ? "Disconnect" : "Connect Wallet"}</span>
    </button>
  );
}
