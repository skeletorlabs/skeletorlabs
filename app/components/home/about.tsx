import Image from "next/image";
import Subtitle from "../subtitle";

export default function About() {
  return (
    <div
      id="about"
      className="relative flex flex-col px-4 xl:px-14 py-24 gap-10 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-space opacity-20" />

      {/* Decorative floating particles */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30 animate-pulse-slow">
        <div className="absolute w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl top-[-100px] left-[-200px]" />
        <div className="absolute w-[400px] h-[400px] bg-indigo-400/30 rounded-full blur-2xl bottom-[-120px] right-[-150px]" />
      </div>

      <Subtitle
        text="About Skeletor Labs"
        description="Meet the sorcery — we build the unbuildable."
      />

      {/* Giant Card */}
      <div className="relative z-10 mx-auto w-full">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl p-10 md:p-16 shadow-2xl">
          {/* Soft glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-indigo-500/10 pointer-events-none" />

          <div className="relative z-10 text-center md:text-left max-w-5xl">
            <p className="mb-6 text-white/90 text-xl md:text-2xl font-semibold leading-relaxed">
              <span className="text-violet-400 font-bold">Skeletor Labs</span>{" "}
              is a Web3-native dev collective crafting smart contracts, dApps,
              and decentralized systems with precision and intent.
            </p>

            <p className="mb-6 text-white/80 text-lg leading-relaxed">
              From the depths of protocol design and low-level execution, we
              partner with builders, founders, and DAOs to architect scalable,
              trustless systems across modern blockchains.
            </p>

            <p className="text-white/70 text-lg leading-relaxed">
              We specialize in infrastructure — not just shipping interfaces,
              but engineering the mechanics that keep decentralized products
              alive under real-world pressure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
