// context/AppKit.tsx

"use client";

import { createAppKit } from "@reown/appkit/react";
import { EthersAdapter } from "@reown/appkit-adapter-ethers";
import { base, baseSepolia } from "@reown/appkit/networks";
import { PropsWithChildren } from "react";

// 1. Get projectId at https://cloud.reown.com
const projectId = "3d6f62cae7f9566611e42c57d19c7810";

// 2. Create a metadata object
const metadata = {
  name: "portfolio",
  description: "AppKit Example",
  url: "https://reown.com/appkit", // origin must match your domain & subdomain
  icons: ["https://assets.reown.com/reown-profile-pic.png"],
};

// 3. Create the AppKit instance
createAppKit({
  adapters: [new EthersAdapter()],
  metadata,
  networks: [base, baseSepolia],
  projectId,
  features: {
    analytics: true, // Optional - defaults to your Cloud configuration
  },
});

export function AppKit({ children }: PropsWithChildren) {
  return children;
}
