"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
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
 * ANIMATION VARIANTS
 * =======================================================*/

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

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
    <motion.div variants={itemVariants} className="flex flex-col gap-3">
      <p className="text-xs font-semibold uppercase tracking-wide text-violet-300">
        {title}
      </p>

      <ul className="flex flex-col gap-1 lg:gap-2 text-sm text-white/70">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex gap-2 bg-purple-400/5 lg:bg-white/5 lg:rounded-md px-3 py-4 md:py-2 items-center"
          >
            <span className="text-violet-400 mt-[2px] hidden md:block">▹</span>
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
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
    <section className="flex flex-col bg-gradient-to-b from-transparent to-black/10 px-4 xl:px-14 py-4 gap-10 mt-10 text-center sm:text-left">
      <Subtitle
        text="Selected Engineering"
        description="Complex infrastructure and wallet integrations delivered under NDA"
      />

      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex w-full items-center justify-center min-h-[360px]"
          >
            <Loading />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-10"
          >
            {selectedEngineeringWork.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="grid grid-cols-1 xl:grid-cols-2 gap-10 bg-skeletor-gray/40 backdrop-blur-sm border border-white/10 rounded-2xl px-8 py-6 transition-all hover:bg-skeletor-gray/50"
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
                  <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                    {item.stacks.map((stack, i) => (
                      <Badge key={i} text={stack} big />
                    ))}
                  </div>

                  {/* LEDGER VISUAL MARK */}
                  <div className="pt-6 sm:pt-10 text-violet-300/70 flex justify-center sm:justify-start">
                    <svg
                      viewBox="0 0 66 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      className="max-h-[130px]"
                    >
                      <path
                        d="M61.1443 20.1977C57.9818 25.9033 50.7922 27.965 45.086 24.8019C39.3822 21.6398 37.3206 14.4499 40.4838 8.74484C43.6459 3.03833 50.8355 0.976326 56.54 4.13861C62.246 7.30128 64.307 14.4918 61.1443 20.1977Z"
                        fill="url(#paint0_linear_50_12)"
                      />
                      <rect
                        x="45.2891"
                        y="4.89893"
                        width="16"
                        height="16"
                        transform="rotate(15 45.2891 4.89893)"
                        fill="url(#pattern0_50_12)"
                      />
                      <path
                        d="M44.2746 17.3288C42.6965 23.6586 36.2856 27.5108 29.9551 25.9323C23.6272 24.3542 19.7751 17.9429 21.3539 11.6135C22.9312 5.28306 29.3422 1.43051 35.6708 3.0086C42.0009 4.5867 45.8527 10.9988 44.2746 17.3288Z"
                        fill="#5FD15C"
                      />
                      <path
                        d="M38.0237 12.7874C38.2589 11.2152 37.0618 10.37 35.425 9.80619L35.956 7.67646L34.6596 7.35339L34.1427 9.42699C33.8019 9.34206 33.4518 9.26194 33.104 9.18256L33.6246 7.09529L32.329 6.77222L31.7977 8.9012C31.5156 8.83696 31.2387 8.77345 30.9699 8.70662L30.9714 8.69997L29.1835 8.25357L28.8387 9.63819C28.8387 9.63819 29.8005 9.85862 29.7802 9.87228C30.3053 10.0034 30.4002 10.3508 30.3843 10.6262L29.7795 13.0525C29.8157 13.0617 29.8626 13.075 29.9142 13.0957C29.871 13.085 29.8249 13.0731 29.7773 13.0617L28.9295 16.4605C28.8653 16.62 28.7024 16.8592 28.3354 16.7684C28.3483 16.7872 27.3931 16.5332 27.3931 16.5332L26.7496 18.0171L28.4366 18.4377C28.7504 18.5163 29.058 18.5987 29.3608 18.6762L28.8243 20.8303L30.1192 21.1534L30.6505 19.0222C31.0042 19.1182 31.3476 19.2068 31.6836 19.2902L31.1541 21.4115L32.4505 21.7346L32.987 19.5845C35.1976 20.0029 36.8598 19.8341 37.5595 17.8347C38.1234 16.2249 37.5315 15.2963 36.3684 14.6907C37.2154 14.4954 37.8534 13.9382 38.0237 12.7874ZM35.0617 16.9408C34.6611 18.5507 31.9506 17.6804 31.0718 17.4622L31.7837 14.6084C32.6624 14.8277 35.4804 15.2619 35.0617 16.9408ZM35.4627 12.7641C35.0971 14.2285 32.8411 13.4845 32.1093 13.3021L32.7547 10.7138C33.4866 10.8962 35.8434 11.2366 35.4627 12.7641Z"
                        fill="white"
                      />
                      <g clipPath="url(#clip0_50_12)">
                        <path
                          d="M24.1207 17.5813C22.518 24.0099 16.0069 27.9223 9.57745 26.3192C3.15075 24.7165 -0.761586 18.2049 0.841804 11.7768C2.44379 5.3475 8.95495 1.43486 15.3824 3.03755C21.8113 4.64023 25.7236 11.1524 24.1207 17.5813Z"
                          fill="#F7931A"
                        />
                        <path
                          d="M17.7871 12.9483C18.026 11.3514 16.8102 10.4929 15.1477 9.92029L15.687 7.7571L14.3702 7.42899L13.8452 9.53522C13.499 9.44888 13.1435 9.36753 12.7901 9.28688L13.319 7.16674L12.003 6.83862L11.4634 9.00111C11.1769 8.93589 10.8955 8.87143 10.6226 8.8035L10.6241 8.7967L8.80818 8.34324L8.4579 9.74967C8.4579 9.74967 9.43485 9.97361 9.41426 9.98739C9.9475 10.1205 10.0439 10.4735 10.0279 10.7533L9.41356 13.2176C9.45028 13.2269 9.49791 13.2404 9.55046 13.2615C9.50653 13.2506 9.45978 13.2387 9.41127 13.2271L8.55016 16.6794C8.48499 16.8414 8.31959 17.0845 7.94678 16.9922C7.95997 17.0113 6.98971 16.7533 6.98971 16.7533L6.33594 18.2606L8.04954 18.6878C8.36833 18.7678 8.68073 18.8514 8.98837 18.9301L8.44347 21.1181L9.75874 21.4462L10.2984 19.2814C10.6577 19.379 11.0064 19.4689 11.3478 19.5537L10.81 21.7083L12.1268 22.0364L12.6717 19.8525C14.9171 20.2775 16.6055 20.1062 17.3161 18.0752C17.8888 16.44 17.2876 15.4968 16.1063 14.8818C16.9667 14.6833 17.6143 14.1173 17.7871 12.9483ZM14.7785 17.1671C14.3716 18.8023 11.6185 17.9183 10.7258 17.6967L11.4489 14.7979C12.3415 15.0208 15.2038 15.4617 14.7785 17.1671ZM15.1858 12.9246C14.8146 14.4119 12.5231 13.6563 11.7798 13.471L12.4353 10.8421C13.1787 11.0274 15.5724 11.3732 15.1858 12.9246Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <pattern
                          id="pattern0_50_12"
                          patternContentUnits="objectBoundingBox"
                          width="1"
                          height="1"
                        >
                          <use
                            xlinkHref="#image0_50_12"
                            transform="scale(0.003125)"
                          />
                        </pattern>
                        <linearGradient
                          id="paint0_linear_50_12"
                          x1="53.8722"
                          y1="3.05772"
                          x2="47.756"
                          y2="25.8835"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#CFCFCF" />
                          <stop offset="0.115385" stopColor="#BABABA" />
                          <stop offset="0.725962" stopColor="#CFCFCF" />
                          <stop offset="1" stopColor="#A8A8A8" />
                        </linearGradient>
                        <clipPath id="clip0_50_12">
                          <rect
                            width="25"
                            height="24"
                            fill="white"
                            transform="translate(0 2.65503)"
                          />
                        </clipPath>
                        <image
                          id="image0_50_12"
                          width="320"
                          height="320"
                          preserveAspectRatio="none"
                          xlinkHref="data:image/png;base64,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"
                        />
                      </defs>
                    </svg>
                  </div>

                  <p className="text-[15px] text-white/70 leading-[28px] max-w-[95%]">
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
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
