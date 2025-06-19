import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Skeletor Dapps",
  description:
    "Dedicated to build the Future of the Web3 Techs Blockchain De-Fi Space, NFTs Collections",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Skeletor Dapps</title>
      </head>
      <body className={`bg-[#151515] ${inter.className}`}>
        <div className="flex flex-col justify-center items-center">
          {children}
        </div>
      </body>
    </html>
  );
}
