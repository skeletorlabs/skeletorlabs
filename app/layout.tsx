"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { TerminalContextProvider } from "react-terminal";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TerminalContextProvider>
      <html lang="en">
        <head>
          <title>Skeletor Dapps</title>
          <meta
            name="description"
            key="desc"
            content="Dedicated to build the Future of the Web3 Techs Blockchain De-Fi Space, NFTs Collections"
          />
        </head>
        <body className={`bg-[#222338] ${inter.className}`}>
          <div className="flex flex-col justify-center items-center">
            {children}
          </div>
        </body>
      </html>
    </TerminalContextProvider>
  );
}
