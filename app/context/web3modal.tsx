// context/AppKit.tsx

"use client";

import { createAppKit } from "@reown/appkit/react";
import { EthersAdapter } from "@reown/appkit-adapter-ethers";
import { AppKitNetwork, base } from "@reown/appkit/networks";
import { PropsWithChildren } from "react";

// 1. Define reownproject ID
const projectId = "26ddcbf907926f7c164d140cb254b211";

// 2. Create a metadata object
const metadata = {
  name: "Skeletor Labs",
  description:
    "Skeletor Labs - A Blockchain Dev Studio Building the Future of Web3, De-Fi, and NFTs Collections",
  url: "https://www.skeletorlabs.xyz",
  icons: ["https://skeletorlabs.xyz/logo-v4.svg"],
};

const hederaTestnet = {
  id: 296,
  name: "Hedera Testnet",
  nativeCurrency: { name: "Hedera", symbol: "HBAR", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://testnet.hashio.io/api"] },
    public: { http: ["https://testnet.hashio.io/api"] }, // Often public and default are the same
  },
  blockExplorers: {
    default: {
      name: "HashScan",
      url: "https://hashscan.io/testnet/evm/contract/",
    },
  },
  testnet: true, // Mark as a testnet
};

// 3. Define allowed networks
export const allowedNetworks: [AppKitNetwork, ...AppKitNetwork[]] = [base];

// 4. Create the AppKit instance
createAppKit({
  adapters: [new EthersAdapter()],
  metadata,
  networks: allowedNetworks,
  projectId,
  features: {
    analytics: true, // Optional - defaults to your Cloud configuration
  },
  themeVariables: {
    "--w3m-accent": "#C0B7F8",
  },
});

// 5. Export the AppKit provider
export function AppKit({ children }: PropsWithChildren) {
  return children;
}
