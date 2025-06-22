"use client";
import dynamic from "next/dynamic";
import Header from "./components/home/header";
import Footer from "./components/home/footer";
import Code from "./components/home/code";
import Companies from "./components/home/companies";
import Contributions from "./components/home/contributions";
import Stack from "./components/home/stack";
import { useCallback, useEffect, useState } from "react";
import Testimonial from "./components/testimonial";
// import { readTestimonialsFromIPFS } from "./lib/ipfs";

const Terminal = dynamic(() => import("./components/terminal"), {
  ssr: false,
});

export default function Home() {
  const [open, setOpen] = useState(false);

  const fetchTestimonials = useCallback(async () => {}, []);

  useEffect(() => {
    fetchTestimonials();
  }, []);
  return (
    <>
      <main className="flex flex-col justify-center items-center w-full xl:w-[1180px] text-white">
        <Header setOpen={setOpen} />

        <div className="flex flex-col w-full xl:min-h-[1200px] z-20 bg-black bg-eth2 bg-bottom bg-contain bg-no-repeat gap-10">
          <Terminal />
          <Code />
          <Companies />
          <Contributions />
          <Stack />
          <p className="text-[100px] text-center xl:text-[180px] px-8 xl:px-10 py-10 pb-16 font-bold leading-tight xl:leading-none">
            LET'S TALK!
          </p>
        </div>
      </main>
      <Footer setOpen={setOpen} />
      <Testimonial open={open} setOpen={setOpen} />
    </>
  );
}
