// context/AppKit.tsx

"use client";

import { createAppKit } from "@reown/appkit/react";
import { EthersAdapter } from "@reown/appkit-adapter-ethers";
import { base } from "@reown/appkit/networks";
import { PropsWithChildren } from "react";

// 1. Get projectId at https://cloud.reown.com
const projectId = "26ddcbf907926f7c164d140cb254b211";

// 2. Create a metadata object
const metadata = {
  name: "portfolio",
  description: "AppKit Example",
  url: "https://reown.com/appkit", // origin must match your domain & subdomain
  icons: ["https://assets.reown.com/reown-profile-pic.png"],
};

const hederaTestnet = {
  id: 296, // Hedera Testnet Chain ID
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
  // If AppKit requires a specific Multicall3 contract or other specific contracts for certain chain IDs,
  // you might add a 'contracts' property here, similar to wagmi's chain definitions.
  // For Hedera Testnet, the Multicall3 address is 0xca11bde05977b3970b55476cebef63ed53eead68
  // e.g., contracts: { multicall3: { address: '0xca11bde05977b3970b55476cebef63ed53eead68' } },
};

// 3. Create the AppKit instance
createAppKit({
  adapters: [new EthersAdapter()],
  metadata,
  networks: [base, hederaTestnet],
  projectId,
  features: {
    analytics: true, // Optional - defaults to your Cloud configuration
  },
  themeVariables: {
    "--w3m-accent": "#C0B7F8",
  },
});

export function AppKit({ children }: PropsWithChildren) {
  return children;
}
