"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { TerminalContextProvider } from "react-terminal";
import { AppKit } from "@/app/context/web3modal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StateProvider from "./context/state";
import "react-alice-carousel/lib/alice-carousel.css";

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
          <title>Skeletor Labs</title>
          <meta
            name="description"
            key="desc"
            content="Dedicated to building the Future of the Web3 Techs Blockchain De-Fi Space, NFTs Collections"
          />
        </head>
        <body className={`starfield ${inter.className}`}>
          <StateProvider>
            <ToastContainer
              position="top-right"
              autoClose={6000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
            <div className="flex flex-col justify-center items-center">
              <AppKit>{children}</AppKit>
            </div>
          </StateProvider>
        </body>
      </html>
    </TerminalContextProvider>
  );
}
