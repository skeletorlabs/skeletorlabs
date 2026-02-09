"use client";
import Image from "next/image";
import Subtitle from "../../subtitle";
import {
  getBitcoinNetwork,
  getBitcoinFees,
  getBitcoinMempool,
  getBitcoinValuation,
  getBitcoinCorrelation,
} from "@/app/lib/api/bitcoin";
import { useEffect, useMemo, useState } from "react";
import { AnimatedMetric } from "../../metrics/AnimatedMetric";
import Loading from "../../loading";
import {
  formatBlockTime,
  formatDifficulty,
  formatFeeLabel,
  formatHashrateTHs,
  formatNetworkStatus,
} from "@/app/lib/bitcoin/formatters";
import {
  BitcoinCorrelation,
  BitcoinFees,
  BitcoinMempool,
  BitcoinNetwork,
  BitcoinValuation,
} from "@/app/lib/bitcoin/types";
import {
  computeMempoolPressure,
  computeNetworkConfidence,
} from "@/app/lib/bitcoin/signals";
import { BitcoinTrend } from "../../bitcoin/BitcoinTrend";
import { formatRelativeTime } from "@/app/lib/time/relative";
import { Halving } from "./intelligence/halving";
import LabelWithTooltip from "../../ui/labelWithTooltip";
import { ValuationCard } from "./intelligence/valuation";
import { CorrelationCard } from "./intelligence/correlation";

export default function BitcoinMetrics() {
  const [network, setNetwork] = useState<BitcoinNetwork | null>(null);
  const [fees, setFees] = useState<BitcoinFees | null>(null);
  const [latency, setLatency] = useState<number>(0);
  const [mempool, setMempool] = useState<BitcoinMempool | null>(null);
  const [valuation, setValuation] = useState<BitcoinValuation | null>(null);
  const [correlation, setCorrelation] = useState<BitcoinCorrelation | null>(
    null,
  );

  useEffect(() => {
    let alive = true;

    async function fetchData() {
      try {
        const start = performance.now();

        const [networkRes, feesRes, mempoolRes, valuationRes, correlationRes] =
          await Promise.all([
            getBitcoinNetwork(),
            getBitcoinFees(),
            getBitcoinMempool(),
            getBitcoinValuation(),
            getBitcoinCorrelation(),
          ]);

        const end = performance.now();

        if (alive) {
          setNetwork(networkRes);
          setFees(feesRes);
          setLatency(end - start);
          setMempool(mempoolRes);
          setValuation(valuationRes);
          setCorrelation(correlationRes);
        }
      } catch (err) {
        console.error("Fetch error:", err);
        if (alive) setLatency(0);
      }
    }

    fetchData();
    const interval = setInterval(fetchData, 15_000);

    return () => {
      alive = false;
      clearInterval(interval);
    };
  }, []);

  const networkStatus = useMemo(() => {
    if (!network) return null;
    return formatNetworkStatus(network.avgBlockTimeSeconds);
  }, [network?.avgBlockTimeSeconds]);

  const mempoolPressure = useMemo(() => {
    if (!mempool) return null;
    return computeMempoolPressure(mempool);
  }, [mempool?.vsize]);

  const networkConfidence = useMemo(() => {
    if (!networkStatus || !mempoolPressure) return null;
    return computeNetworkConfidence(networkStatus, mempoolPressure);
  }, [networkStatus?.label, mempoolPressure?.level]);

  const feeLevel =
    fees && networkStatus
      ? networkStatus.label === "Congested"
        ? fees.high
        : networkStatus.label === "Slow"
          ? fees.medium
          : fees.low
      : null;

  const canRenderCard =
    network &&
    networkStatus &&
    fees &&
    feeLevel &&
    mempoolPressure &&
    networkConfidence;

  return (
    <div
      id="live-bitcoin"
      className="relative flex flex-col px-4 xl:px-14 pt-24 gap-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-space opacity-20" />

      <Subtitle
        text="Live Network Intelligence"
        description="Real-time Bitcoin network signals, streamed from our internal infrastructure layer."
      />

      <div className="flex flex-col relative z-10 justify-center gap-8">
        <div className="relative w-full rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-8 md:p-6 md:py-8 shadow-2xl">
          <div className="absolute inset-0 rounded-2xl bg-indigo-500/10 blur-3xl pointer-events-none" />

          {!canRenderCard ? (
            <div className="min-h-[320px] flex items-center justify-center">
              <Loading />
            </div>
          ) : (
            <div className="relative flex flex-col lg:flex-row gap-10">
              {/* LEFT */}
              <div className="w-full text-center lg:text-start">
                <p className="mb-3 text-white/90 text-xl md:text-2xl font-semibold">
                  <span className="text-violet-400 font-bold">
                    Live Bitcoin Network
                  </span>{" "}
                  snapshot powered by Skeletor Labs.
                </p>

                <p className="mb-14 text-white/70 max-w-3xl mx-auto lg:mx-0 text-base">
                  This block showcases live Bitcoin network intelligence
                  aggregated from multiple mempool endpoints and normalized by
                  our internal API.
                </p>

                {/* METRICS */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <AnimatedMetric
                    label="Block Height"
                    value={network.blockHeight}
                    format={(v) => v.toLocaleString()}
                    animate={!network.meta.cached}
                    tooltip="The total number of blocks connected in the Bitcoin blockchain since the genesis block."
                  />

                  <AnimatedMetric
                    label="Hashrate"
                    value={network.hashrateTHs}
                    format={formatHashrateTHs}
                    animate={!network.meta.cached}
                    tooltip="The estimated total computational power being used to mine and secure the network."
                  />

                  <AnimatedMetric
                    label="Difficulty"
                    value={network.difficulty}
                    format={formatDifficulty}
                    animate={!network.meta.cached}
                    tooltip="A relative measure of how difficult it is to find a new block compared to the easiest it can ever be."
                  />

                  <AnimatedMetric
                    label="Avg Block Time"
                    value={network.avgBlockTimeSeconds}
                    format={formatBlockTime}
                    animate={!network.meta.cached}
                    tooltip="The average time between blocks. The network targets 10 minutes through difficulty adjustments."
                  />

                  {/* STATUS ROWS */}
                  <div className="flex flex-col items-center md:items-start">
                    <LabelWithTooltip tooltip="Current operational state of the Bitcoin network based on block production and node connectivity.">
                      Network Status
                    </LabelWithTooltip>
                    <span
                      className={`${networkStatus.color} text-2xl md:text-lg font-semibold`}
                    >
                      {networkStatus.label}
                    </span>
                  </div>

                  <div className="flex flex-col items-center md:items-start">
                    <LabelWithTooltip tooltip="The level of congestion in the mempool. High pressure means more pending transactions and higher fees.">
                      Mempool Pressure
                    </LabelWithTooltip>
                    <span
                      className={`${mempoolPressure.color} text-2xl md:text-lg font-semibold`}
                    >
                      {mempoolPressure.level}
                    </span>
                  </div>

                  <div className="flex flex-col items-center md:items-start">
                    <LabelWithTooltip tooltip="A metric representing the reliability and synchronization health of nodes across the globe.">
                      Network Confidence
                    </LabelWithTooltip>
                    <span
                      className={`${networkConfidence.color} text-2xl md:text-lg font-semibold`}
                    >
                      {networkConfidence.level}
                    </span>
                  </div>

                  {/* TREND */}
                  <BitcoinTrend trend={network.trend} />

                  {/* FEE */}
                  <div className="col-span-2 md:col-span-3 pt-8 border-t border-white/5">
                    <AnimatedMetric
                      label="Recommended Tx Fee"
                      value={feeLevel}
                      format={(v) =>
                        `~${v} sat/vB · ${formatFeeLabel(networkStatus.label)}`
                      }
                      animate={!fees.meta.cached}
                      tooltip="The estimated fee rate in satoshis per virtual byte (sat/vB) for a timely transaction confirmation."
                    />
                  </div>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="relative flex-shrink-0 hidden lg:flex">
                <div className="absolute inset-0 bg-indigo-500/30 blur-3xl rounded-full" />
                <Image
                  src="/logo2.svg"
                  width={260}
                  height={260}
                  alt="Skeletor Labs Logo"
                  className="relative z-10 drop-shadow-2xl"
                />
              </div>
            </div>
          )}
        </div>

        {valuation && correlation && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <ValuationCard data={valuation} />
            <CorrelationCard data={correlation} />
          </div>
        )}

        {network && <Halving data={network.halving} />}

        {network && (
          <div className="text-white/50 text-xs px-4">
            <span className="flex flex-wrap justify-center lg:justify-start gap-2">
              <span
                className={`animate-pulse ${
                  network.meta.cached ? "text-amber-400" : "text-green-300"
                }`}
              >
                ●
              </span>
              {network.meta.cached ? "Go Internal Cache" : "Fresh Engine Data"}

              <span className="text-white/60">·</span>
              <span
                className={`
                  transition-colors duration-500
                  ${network.meta.cached ? "text-white/60" : "text-green-300"}
                `}
              >
                Updated {formatRelativeTime(network.meta.updatedAt)}
              </span>

              <span className="text-white/60">·</span>
              <span className="text-violet-300 font-mono">
                ~{latency.toFixed(0)}ms API Latency
              </span>
              <span className="text-white/60">·</span>

              <a
                href="https://github.com/skeletorlabs/crypto-api"
                target="_blank"
                className="text-violet-400 hover:text-violet-300"
              >
                View source (Go)
              </a>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
