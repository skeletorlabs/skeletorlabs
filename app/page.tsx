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
import Labs from "./components/home/labs";
import WhyUs from "./components/home/whyUs";
import Team from "./components/home/team";
import Services from "./components/home/services";
import About from "./components/home/about";
import FAB from "./components/fab";
import SelectedEngineeringWork from "./components/home/selected";
import BitcoinMetrics from "./components/home/bitcoin/metrics";

export default function Home() {
  const Terminal = dynamic(
    () => import("./components/terminal").then((m) => m.default),
    {
      ssr: false,
      loading: () => <Loading css="min-h-[1200px] md:min-h-[688px]" />,
    },
  );

  return (
    <div className="flex flex-col items-center justify-center bg-slate-400/30 w-full xl:w-[1282px] relative">
      <main className="flex flex-col justify-center items-center w-full xl:w-[1280px] text-white">
        <Header Terminal={Terminal} />
        <div className="flex flex-col w-full xl:min-h-[1200px] z-20 bg-black bg-eth2 bg-bottom bg-contain bg-no-repeat relative">
          <BitcoinMetrics />
          <About />
          <SelectedEngineeringWork />
          <Code />
          <Services />
          <Companies />
          <Contributions />
          <Labs />
          <Testimonials />
          <Chains />
          <Stack />
          <Team />
          <WhyUs />
          <FAB />
        </div>
      </main>
      <Footer />
    </div>
  );
}
