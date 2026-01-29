"use client";
import Image from "next/image";
import Subtitle from "../subtitle";
import {
  BitcoinNetworkResponse,
  getBitcoinNetwork,
} from "@/app/lib/api/bitcoin";
import { useCountUp } from "@/app/hooks/useCountUp";
import { useEffect, useState } from "react";
import { AnimatedMetric } from "../metrics/AnimatedMetric";

export default function LiveBitcoin() {
  const [data, setData] = useState<BitcoinNetworkResponse | null>(null);

  useEffect(() => {
    getBitcoinNetwork().then(setData).catch(console.error);
  }, []);

  function formatHashrateTHs(ths: number): string {
    const ehs = ths / 1_000_000;

    if (ehs >= 1000) {
      const zhs = ehs / 1000;
      return `${zhs.toFixed(2)} ZH/s`;
    }

    return `${ehs.toFixed(1)} EH/s`;
  }

  function formatBlockTime(seconds: number): string {
    const minutes = seconds / 60;

    if (minutes < 1.5) {
      return `${Math.round(seconds)} sec`;
    }

    return Number.isInteger(minutes)
      ? `${minutes} min`
      : `${minutes.toFixed(1)} min`;
  }

  function formatDifficulty(diff: number): string {
    const trillion = diff / 1e12;

    if (trillion >= 1000) {
      return `${(trillion / 1000).toFixed(2)} Q`;
    }

    return `${trillion.toFixed(1)} T`;
  }

  function getNetworkStatus(avgBlockTimeSeconds: number) {
    if (avgBlockTimeSeconds <= 12 * 60) {
      return { label: "Normal", color: "text-emerald-400" };
    }

    if (avgBlockTimeSeconds <= 18 * 60) {
      return { label: "Slow", color: "text-yellow-400" };
    }

    return { label: "Congested", color: "text-red-400" };
  }

  const networkStatus = data
    ? getNetworkStatus(data.avgBlockTimeSeconds)
    : null;

  return (
    <div
      id="live-bitcoin"
      className="relative flex flex-col px-4 xl:px-14 py-24 gap-10 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-space opacity-20" />

      {/* Decorative floating particles */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30 animate-pulse-slow">
        <div className="absolute w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl top-[-100px] left-[-200px]" />
        <div className="absolute w-[400px] h-[400px] bg-indigo-400/30 rounded-full blur-2xl bottom-[-120px] right-[-150px]" />
      </div>

      <Subtitle
        text="Live Network Intelligence"
        description="Real-time Bitcoin network signals, streamed from our internal infrastructure layer."
      />

      <div className="relative z-10 flex justify-center">
        {/* BIG CARD */}
        <div className="relative w-full rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-10 md:p-14 shadow-2xl">
          {/* Glow */}
          <div className="absolute inset-0 rounded-2xl bg-indigo-500/10 blur-3xl pointer-events-none" />

          <div className="relative flex flex-col lg:flex-row items-center gap-14">
            {/* Text + metrics */}
            <div className="w-full text-center lg:text-start">
              <p className="mb-6 text-white/90 text-xl md:text-2xl font-semibold">
                <span className="text-violet-400 font-bold">
                  Live Bitcoin Network
                </span>{" "}
                snapshot powered by Skeletor Labs.
              </p>

              <p className="mb-10 text-white/80 max-w-3xl">
                This block showcases live Bitcoin network intelligence
                aggregated from multiple mempool endpoints and normalized by our
                internal API. It reflects the same data streams used in
                production systems.
              </p>

              {/* 
                Metrics grid 
                Animates only when data is fresh (non-cached)
              */}
              {data && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <AnimatedMetric
                    label="Block Height"
                    value={data.blockHeight}
                    format={(v) => v.toLocaleString()}
                    animate={!data.cached}
                  />

                  <AnimatedMetric
                    label="Hashrate"
                    value={data.hashrateTHs}
                    format={formatHashrateTHs}
                    animate={!data.cached}
                  />

                  <AnimatedMetric
                    label="Difficulty"
                    value={data.difficulty}
                    format={formatDifficulty}
                    animate={!data.cached}
                  />

                  <AnimatedMetric
                    label="Avg Block Time"
                    value={data.avgBlockTimeSeconds}
                    format={formatBlockTime}
                    animate={!data.cached}
                  />

                  {networkStatus && (
                    <div className="flex flex-col">
                      <span className="text-white/60 text-sm">
                        Network Status
                      </span>
                      <span
                        className={`${networkStatus.color} text-lg font-semibold`}
                      >
                        {networkStatus.label}
                      </span>
                    </div>
                  )}
                </div>
              )}

              <p className="mt-10 text-white/50 text-sm">
                <span>
                  <span className="animate-pulse text-green-300 pr-2">●</span>
                  Live data · Cached automatically · Internal Go service
                </span>

                <span className="hidden sm:inline px-2">·</span>

                <a
                  href="https://github.com/skeletorlabs/crypto-api"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-400 hover:text-violet-300 transition text-xs"
                >
                  View source (Go)
                </a>
              </p>
            </div>

            {/* Logo */}
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 w-full h-full rounded-full bg-indigo-500/30 blur-3xl animate-pulse-slow" />
              <Image
                src="/logo2.svg"
                width={260}
                height={260}
                alt="Skeletor Labs Logo"
                className="rounded-full relative z-10 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
