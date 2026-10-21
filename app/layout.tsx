import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.skeletorlabs.xyz"),
  title: "Lucas Silveira",
  // Skeletor Labs icon for /labs and the older routes; the CV pages override it.
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`starfield ${inter.className}`}>{children}</body>
    </html>
  );
}
