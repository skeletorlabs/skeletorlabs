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

      <div className="relative z-10 flex flex-col-reverse text-center lg:text-start lg:flex-row items-center justify-between gap-14">
        {/* Text block */}
        <div className="w-full md:max-w-3xl md:text-xl tracking-wide">
          <p className="mb-6 text-white/90 text-xl md:text-2xl font-semibold">
            <span className="text-violet-400 font-bold leading-normal">
              Skeletor Labs
            </span>{" "}
            is a Web3-native dev collective crafting smart contracts, dApps, and
            decentralized systems with precision and power.
          </p>
          <p className="mb-6 text-white/80">
            From the shadows of code and chaos, we team up with protocol
            builders, daring founders, and visionary DAOs to summon scalable,
            trustless systems across chains.
          </p>
          <p className="text-white/70">
            Whether it's launching token economies or orchestrating complex
            staking flows, we don't just build apps — we conjure infrastructure
            that lasts.
          </p>
        </div>

        {/* Logo with glow */}
        <div className="relative flex-shrink-0">
          <div className="absolute inset-0 w-full h-full rounded-full bg-indigo-500/30 blur-3xl animate-pulse-slow" />
          <Image
            src="/logo2.svg"
            width={320}
            height={320}
            alt="Skeletor Labs Logo"
            className="rounded-full z-10 relative drop-shadow-2xl transition-all duration-500 mt-[-40px]"
          />
        </div>
      </div>
    </div>
  );
}
