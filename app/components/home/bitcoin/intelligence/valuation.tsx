import React, { useMemo } from "react";
import { Brain, Clock, Layers } from "lucide-react";
import { BitcoinValuation } from "@/app/lib/bitcoin/types";

export const ValuationCard = ({ data }: { data: BitcoinValuation }) => {
  const valuationStatus = useMemo(() => {
    if (data.ratio > 3.0)
      return { label: "OVERVALUED", color: "text-red-400", bar: "bg-red-600" };
    if (data.ratio > 2.0)
      return {
        label: "FAIR VALUE",
        color: "text-yellow-400",
        bar: "bg-yellow-500",
      };
    return {
      label: "UNDERVALUED",
      color: "text-green-400",
      bar: "bg-green-500",
    };
  }, [data.ratio]);

  return (
    <div className="bg-skeletor-dark-violet/60 lg:border border-white/10 lg:rounded-2xl p-6 backdrop-blur-sm relative overflow-hidden group flex flex-col h-full items-center lg:items-start">
      <div className="flex items-center gap-2 mb-6 text-gray-400">
        <Brain size={18} className="text-purple-400" />
        <span className="text-xs font-bold tracking-widest uppercase text-gray-400">
          BTC / M2 RATIO
        </span>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-end gap-4 mb-4 w-full">
        <h3 className="text-5xl font-bold text-white tracking-tight">
          {data.ratio.toFixed(2)}x
        </h3>

        <div className="flex flex-col gap-[4px] flex-1 w-[300px] lg:w-full">
          <div className="flex justify-between items-center px-1">
            <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">
              Valuation Gauge
            </span>
            <span
              className={`text-[10px] uppercase tracking-wider ${valuationStatus.color}`}
            >
              {valuationStatus.label}
            </span>
          </div>

          <div className="h-6 bg-gray-800/50 rounded-full relative overflow-hidden border border-white/5 mb-1">
            <div
              className="h-full rounded-full bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600 transition-all duration-1000"
              style={{
                width: `${Math.max(2, Math.min((data.ratio / 4) * 100, 100))}%`,
              }}
            />
          </div>
        </div>
      </div>

      <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs text-center lg:max-w-auto lg:text-left">
        {data.description}
      </p>

      <div className="mt-auto pt-4 border-t border-white/5 flex items-center gap-2 text-gray-500">
        <Layers size={14} />
        <span className="text-[10px] uppercase tracking-wider">
          Source: Internal Engine
        </span>
      </div>
    </div>
  );
};
