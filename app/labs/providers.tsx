"use client";
import { TerminalContextProvider } from "react-terminal";
import { AppKit } from "@/app/context/web3modal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StateProvider from "@/app/context/state";
import "react-alice-carousel/lib/alice-carousel.css";

export default function LabsProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TerminalContextProvider>
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
    </TerminalContextProvider>
  );
}
