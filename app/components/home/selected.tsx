"use client";

import { useEffect, useState } from "react";
import Subtitle from "../subtitle";
import Badge from "../badge";
import Loading from "../loading";

/* =========================================================
 * DATA
 * =======================================================*/

const selectedEngineeringWork = [
  {
    name: "Bitcoin Ledger Integration",
    usecase: "Hardware wallet support for Bitcoin transactions",

    summary:
      "End-to-end Ledger hardware wallet integration for Bitcoin, covering PSBT signing flows, legacy (P2PKH) compatibility, SegWit and Taproot support. Includes raw transaction handling, nonWitnessUtxo management, fee estimation via temporary wallets, and a robust BLE-based signing flow designed for production environments on both iOS and Android, accounting for platform-specific BLE constraints.",

    stacks: [
      "TypeScript",
      "React Native",
      "BitcoinJS",
      "Ledger hw-app-btc",
      "Bluetooth LE",
      "PSBT",
    ],

    engineeringFocus: {
      problemSpace: [
        "Ledger legacy (P2PKH) signing requiring strict nonWitnessUtxo handling",
        "PSBT compatibility across legacy, SegWit and Taproot inputs",
        "Reliable fee estimation without mutating signing state",
        "BLE instability, retries and device concurrency constraints",
      ],

      execution: [
        "Raw transaction fetching with witness stripping for Ledger compliance",
        "Custom PSBT construction and validation pipeline",
        "Temporary-wallet based fee estimation strategy",
        "Deterministic input/output ordering to avoid Ledger rejection",
      ],

      guarantees: [
        "No private keys ever leave the hardware device",
        "Strict separation between transaction preparation and signing",
        "Zero mutation of UTXO state during fee estimation",
        "Production-safe BLE flow with recovery and retry paths",
      ],
    },

    note: "Delivered under NDA for a production mobile wallet. Client details and source code cannot be disclosed.",
  },
];

/* =========================================================
 * COMPONENTS
 * =======================================================*/

function EngineeringBlock({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs font-semibold uppercase tracking-wide text-violet-300">
        {title}
      </p>

      <ul className="flex flex-col gap-2 text-sm text-white/70">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex gap-2 bg-white/5 rounded-md px-3 py-2 items-center"
          >
            <span className="text-violet-400 mt-[2px]">▹</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* =========================================================
 * MAIN
 * =======================================================*/

export default function SelectedEngineeringWork() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="flex flex-col bg-black/10 px-8 xl:px-14 py-12 border-t border-white/5 gap-10 mt-10">
      <Subtitle
        text="Selected Engineering Work"
        description="Complex infrastructure and wallet integrations delivered under NDA"
      />

      {loading ? (
        <div className="flex w-full items-center justify-center min-h-[360px]">
          <Loading />
        </div>
      ) : (
        <div className="flex flex-col gap-10">
          {selectedEngineeringWork.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 xl:grid-cols-2 gap-10 bg-skeletor-gray/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-opacity duration-200 hover:opacity-95"
            >
              {/* LEFT COLUMN */}
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-semibold text-violet-300">
                    {item.name}
                  </h3>

                  <p className="text-sm text-white/60 max-w-[90%]">
                    {item.usecase}
                  </p>
                </div>

                {/* STACK TAGS */}
                <div className="flex flex-wrap gap-2">
                  {item.stacks.map((stack, i) => (
                    <Badge key={i} text={stack} big />
                  ))}
                </div>

                {/* LEDGER VISUAL MARK */}
                <div className="py-10 text-violet-300/70">
                  <svg
                    enable-background="new 0 0 2000.58 669.35"
                    viewBox="0 0 2000.58 669.35"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    height={120}
                  >
                    <path d="m1711.35 627.2v42.14h289.22v-190.05h-42.14v147.91zm0-627.2v42.14h247.08v147.92h42.14v-190.06zm-149.15 326v-97.92h66.11c32.23 0 43.8 10.74 43.8 40.08v17.35c0 30.16-11.16 40.49-43.8 40.49zm104.94 17.35c30.16-7.85 51.23-35.95 51.23-69.41 0-21.07-8.26-40.08-23.96-55.37-19.83-19.01-46.28-28.51-80.57-28.51h-92.96v289.22h41.32v-115.27h61.98c31.81 0 44.62 13.22 44.62 46.28v69h42.14v-62.39c0-45.45-10.74-62.8-43.8-67.76zm-347.88 9.5h127.26v-38.01h-127.26v-86.77h139.65v-38.01h-181.8v289.22h188v-38.01h-145.85zm-138.42 15.29v19.83c0 41.73-15.29 55.37-53.71 55.37h-9.09c-38.43 0-57.02-12.4-57.02-69.83v-77.68c0-57.84 19.42-69.83 57.84-69.83h8.26c37.6 0 49.58 14.05 49.99 52.89h45.45c-4.13-57.02-42.14-92.96-99.16-92.96-27.68 0-50.82 8.68-68.17 25.2-26.03 24.38-40.49 65.7-40.49 123.54 0 55.78 12.4 97.1 38.01 122.71 17.35 16.94 41.32 26.03 64.87 26.03 24.79 0 47.52-9.92 59.08-31.4h5.78v27.27h38.01v-149.15h-111.97v38.01zm-364.41-140.07h45.04c42.56 0 65.7 10.74 65.7 68.59v76.02c0 57.84-23.14 68.59-65.7 68.59h-45.04zm48.75 251.22c78.92 0 108.25-59.91 108.25-144.61 0-85.94-31.4-144.61-109.08-144.61h-89.25v289.22zm-289.63-126.44h127.26v-38.01h-127.26v-86.77h139.65v-38.01h-181.8v289.22h188v-38.01h-145.85zm-243.77-162.79h-42.14v289.22h190.06v-38.01h-147.92zm-331.78 289.23v190.06h289.22v-42.15h-247.08v-147.91zm0-479.29v190.06h42.14v-147.92h247.08v-42.14z" />
                  </svg>
                </div>

                <p className="text-sm text-white/70 leading-[26px] max-w-[95%]">
                  {item.summary}
                </p>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs text-white/40 italic">{item.note}</p>

                  <p className="text-[11px] text-white/30 mt-2">
                    Ledger is a registered trademark. Used solely to indicate
                    technical compatibility.
                  </p>
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="flex flex-col gap-6">
                <EngineeringBlock
                  title="Problem Space"
                  items={item.engineeringFocus.problemSpace}
                />

                <EngineeringBlock
                  title="Technical Execution"
                  items={item.engineeringFocus.execution}
                />

                <EngineeringBlock
                  title="Constraints & Guarantees"
                  items={item.engineeringFocus.guarantees}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
