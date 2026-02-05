import { getNetworkTrendConfig } from "@/app/lib/bitcoin/trend";
import { NetworkTrend } from "@/app/lib/bitcoin/types";
import LabelWithTooltip from "../ui/labelWithTooltip";

type Props = {
  trend?: NetworkTrend;
};

export function BitcoinTrend({ trend }: Props) {
  const cfg = getNetworkTrendConfig(trend);

  return (
    <div className="flex flex-col items-center md:items-start">
      <LabelWithTooltip tooltip="A combined momentum indicator showing if the network security and activity are improving or worsening.">
        Network Trend
      </LabelWithTooltip>

      <div className="flex items-center gap-2">
        <span className={`${cfg.color} text-lg`} aria-hidden>
          {cfg.icon}
        </span>

        <span className={`${cfg.color} text-2xl md:text-lg font-semibold`}>
          {cfg.label}
        </span>
      </div>
    </div>
  );
}
