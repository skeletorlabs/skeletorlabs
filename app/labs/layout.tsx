import type { Metadata } from "next";
import LabsProviders from "./providers";

export const metadata: Metadata = {
  title: "Skeletor Labs",
  description:
    "Dedicated to building the Future of the Web3 Techs Blockchain De-Fi Space, NFTs Collections",
};

export default function LabsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LabsProviders>{children}</LabsProviders>;
}
