import { discord, github, linkedin, mail, telegram, twitterX } from "./svgs";

export const SOCIALS = [
  { icon: linkedin, href: "https://www.linkedin.com/company/skeletorlabs/" },
  { icon: github, href: "https://github.com/skeletordapps" },
  { icon: telegram, href: "https://telegram.me/skeletor_keldor" },
  { icon: twitterX, href: "https://x.com/skeletorlabs" },
  // { icon: discord, href: "skeletor8555" },
];

export const LINKS: { [key: number]: string } = {
  1337: "http://localhost:8545",
  5: "https://goerli.etherscan.io",
  11155111: "https://sepolia.etherscan.io",
  8453: "https://basescan.org",
  84532: "https://sepolia.basescan.org",
};
