"use client";
import dynamic from "next/dynamic";
import Header from "./components/home/header";
import Footer from "./components/home/footer";
import Code from "./components/home/code";
import Companies from "./components/home/companies";
import Contributions from "./components/home/contributions";
import Stack from "./components/home/stack";
import Testimonials from "./components/home/testimonials";
import Loading from "./components/loading";
import Chains from "./components/home/chains";

export default function Home() {
  const Terminal = dynamic(() => import("./components/terminal"), {
    ssr: false,
    loading: () => <Loading css="min-h-[610px]" />,
  });

  return (
    <div className="flex flex-col items-center justify-center bg-slate-400/30 w-full xl:w-[1182px]">
      <main className="flex flex-col justify-center items-center w-full xl:w-[1180px] text-white">
        <Header />
        <div className="flex flex-col w-full xl:min-h-[1200px] z-20 bg-black bg-eth2 bg-bottom bg-contain bg-no-repeat">
          <Terminal />
          <Code />
          <Companies />
          <Chains />
          <Contributions />
          <Testimonials />
          <Stack />

          <p className="text-[120px] text-center xl:text-[180px] px-4 xl:px-10 py-10 pb-16 font-bold leading-tight xl:leading-none">
            LET'S TALK!
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
