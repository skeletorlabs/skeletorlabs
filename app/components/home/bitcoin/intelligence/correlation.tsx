import React, { useMemo } from "react";
import { Brain, Layers } from "lucide-react";
import { BitcoinCorrelation } from "@/app/lib/bitcoin/types";

export const CorrelationCard = ({ data }: { data: BitcoinCorrelation }) => {
  const fillLevel = `${Math.abs(data.coefficient) * 100}%`;

  const correlationStrength = useMemo(() => {
    const val = Math.abs(data.coefficient);
    if (val > 0.7) return "STRONG CORRELATION";
    if (val > 0.4) return "MODERATE CORRELATION";
    return "WEAK CORRELATION";
  }, [data.coefficient]);

  return (
    <div className="bg-skeletor-dark-violet/60 border border-white/10 rounded-2xl p-6 backdrop-blur-sm relative overflow-hidden group flex flex-col h-full">
      <div className="flex items-center gap-2 mb-6 text-gray-400">
        <Brain size={18} className="text-purple-400" />
        <span className="text-xs font-bold tracking-widest uppercase text-gray-400">
          PEARSON CORRELATION
        </span>
      </div>

      <div className="flex justify-between items-end mb-4 relative">
        <div className="flex items-end gap-5">
          <h3 className="text-5xl font-bold text-white tracking-tighter leading-none">
            {data.coefficient.toFixed(2)}
          </h3>

          <div className="bg-white/5 h-8 px-3 rounded mb-1 border border-white/5">
            <span className="text-purple-300 text-[10px] font-bold uppercase tracking-wider whitespace-nowrap h-full flex items-center pt-[2px]">
              {correlationStrength}
            </span>
          </div>
        </div>

        <div className="absolute top-0 right-0">
          <div className="relative flex flex-col items-center">
            <div className="w-4 h-16 bg-gray-800/80 rounded-t-full border-x border-t border-white/10 relative overflow-hidden">
              <div
                className="absolute bottom-0 w-full bg-gradient-to-t from-purple-500 to-cyan-400 transition-all duration-1000"
                style={{ height: fillLevel }}
              />
            </div>
            <div className="w-8 h-8 bg-gray-800/80 rounded-full border border-white/10 -mt-1 flex items-center justify-center relative z-10 overflow-hidden shadow-lg shadow-purple-500/20">
              <div className="w-full h-full bg-purple-500" />
              <div className="absolute top-1 left-1 w-2 h-2 bg-white/20 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      <p className="text-gray-400 text-sm leading-relaxed mb-6">
        Correlation calculated based on {data.sample_count} samples from{" "}
        {new Date(data.start_date).getFullYear()} to{" "}
        {new Date(data.end_date).getFullYear()}.
      </p>

      <div className="mt-auto pt-4 border-t border-white/5 flex items-center gap-2 text-gray-500">
        <Layers size={14} />
        <span className="text-[10px] uppercase tracking-wider">
          Source: FRED & Multi-index Aggregator
        </span>
      </div>
    </div>
  );
};
