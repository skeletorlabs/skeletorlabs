"use client";
import { BitcoinHalving } from "@/app/lib/bitcoin/types";
import { motion, AnimatePresence } from "framer-motion";

interface HalvingProps {
  data: BitcoinHalving;
}

export function Halving({ data }: HalvingProps) {
  return (
    <div className="w-full mt-6 relative group bg-skeletor-dark-violet">
      <div className="absolute -inset-1 bg-gradient-to-r blur-2xl opacity-50" />

      <div className="relative flex flex-col md:flex-row items-center justify-between px-8 py-6 backdrop-blur-xl shadow-2xl overflow-hidden">
        {/* LEFT: Progress Bar & Countdown */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-white/5">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${data.progressPercent}%` }}
            transition={{ duration: 1.5, ease: "circOut" }}
            className="h-full bg-gradient-to-r from-orange-600 to-orange-400 shadow-[0_0_12px_rgba(249,115,22,0.5)]"
          />
        </div>

        <div className="flex flex-col items-center md:items-start z-10">
          <span className="text-orange-500/80 text-[10px] font-mono uppercase tracking-[0.3em] mb-2">
            Next Halving Countdown
          </span>
          <div className="flex flex-col md:flex-row items-baseline gap-3">
            <AnimatePresence mode="wait">
              <motion.span
                key={data.blocksRemaining}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-white text-4xl font-bold font-mono tracking-tighter"
              >
                {data.blocksRemaining.toLocaleString()}
              </motion.span>
            </AnimatePresence>
            <span className="text-white/30 text-sm font-mono uppercase tracking-widest text-center w-full md:w-max">
              Blocks Left
            </span>
          </div>
        </div>

        {/* RIGHT: Stats Grid */}
        <div className="flex gap-12 mt-6 md:mt-0 z-10">
          <div className="text-center md:text-right">
            <span className="text-white/40 text-[9px] font-mono uppercase tracking-widest block mb-1">
              Cycle Progress
            </span>
            <AnimatePresence mode="wait">
              <motion.span
                key={data.progressPercent}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-orange-500 font-mono text-xl font-bold"
              >
                {data.progressPercent.toFixed(2)}%
              </motion.span>
            </AnimatePresence>
          </div>

          <div className="text-center md:text-right">
            <span className="text-white/40 text-[9px] font-mono uppercase tracking-widest block mb-1">
              Block Subsidy
            </span>
            <div className="flex items-center gap-2 font-mono text-lg">
              <span className="text-white/60 text-sm">
                {data.currentSubsidy.toFixed(3)}
              </span>
              <span className="text-orange-500">→</span>
              <span className="text-white font-bold tracking-tight">
                {data.nextSubsidy.toFixed(3)}
              </span>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20" />
      </div>
    </div>
  );
}
