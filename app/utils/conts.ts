import { github, linkedin, mail, telegram, twitterX } from "./svgs";

export const SOCIALS = [
  { icon: linkedin, href: "https://www.linkedin.com/company/skeletorlabs/" },
  { icon: github, href: "https://github.com/skeletorlabs" },
  { icon: telegram, href: "https://telegram.me/skeletor_keldor" },
  { icon: twitterX, href: "https://x.com/skeletorlabs" },
];

export const LINKS: { [key: number]: string } = {
  1337: "http://localhost:8545",
  5: "https://goerli.etherscan.io",
  11155111: "https://sepolia.etherscan.io",
  8453: "https://basescan.org",
  84532: "https://sepolia.basescan.org",
  296: "https://hashscan.io/testnet",
};

export const TESTIMONIAL_REGISTRY_ADDRESSES: Record<number, string> = {
  8453: "0x1b4c7cC88e22C0518a3BF279FbC0ab37a6fa442B", // BASE
  296: "0x30e5D9c3D1D2e610Cb3eA59C6e45bC621377Bda3", // HEDERA TESTNET
};

export const CHAIN_ID_TO_NAME: Record<number, string> = {
  8453: "Base",
  296: "Hedera Testnet",
};
export const CHAIN_ID_TO_ICON: Record<number, string> = {
  8453: "/chains/base.svg",
  296: "/chains/hedera.svg",
};
