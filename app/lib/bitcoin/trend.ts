import { NetworkTrend } from "./types"

type TrendConfig = {
  label: string;
  color: string;
  description: string;
  icon: string;
};

export const NETWORK_TREND_CONFIG: Record<NetworkTrend, TrendConfig> = {
  Improving: {
    label: "Improving",
    color: "text-green-400",
    description: "Blocks are being mined faster than average",
    icon: "↑",
  },
  Stable: {
    label: "Stable",
    color: "text-neutral-400",
    description: "Network conditions are within normal range",
    icon: "→",
  },
  Worsening: {
    label: "Worsening",
    color: "text-red-400",
    description: "Blocks are taking longer than usual to be mined",
    icon: "↓",
  },
};

export function getNetworkTrendConfig(trend?: NetworkTrend) {
  return NETWORK_TREND_CONFIG[trend ?? "Stable"];
}
