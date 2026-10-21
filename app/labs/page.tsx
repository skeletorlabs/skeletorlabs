"use client";
import dynamic from "next/dynamic";
import Header from "@/app/components/home/header";
import Footer from "@/app/components/home/footer";
import Code from "@/app/components/home/code";
import Companies from "@/app/components/home/companies";
import Contributions from "@/app/components/home/contributions";
import Stack from "@/app/components/home/stack";
import Testimonials from "@/app/components/home/testimonials";
import Loading from "@/app/components/loading";
import Chains from "@/app/components/home/chains";
import Labs from "@/app/components/home/labs";
import WhyUs from "@/app/components/home/whyUs";
import Team from "@/app/components/home/team";
import Services from "@/app/components/home/services";
import About from "@/app/components/home/about";
import FAB from "@/app/components/fab";
import SelectedEngineeringWork from "@/app/components/home/selected";
import BitcoinMetrics from "@/app/components/home/bitcoin/metrics";

export default function Home() {
  const Terminal = dynamic(
    () => import("@/app/components/terminal").then((m) => m.default),
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
          <About />
          <WhyUs />
          <FAB />
        </div>
      </main>
      <Footer />
    </div>
  );
}
