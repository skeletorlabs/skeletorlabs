import { HIGH_PRESSURE_VSIZE, MODERATE_PRESSURE_VSIZE } from "./constants";
import {
  BitcoinMempool,
  MempoolPressure,
  NetworkConfidence,
  NetworkStatus,
} from "./types";

export function computeMempoolPressure(
  mempool: BitcoinMempool,
): MempoolPressure {
  if (mempool.vsize > HIGH_PRESSURE_VSIZE) {
    return { level: "High", color: "text-red-400" };
  }

  if (mempool.vsize > MODERATE_PRESSURE_VSIZE) {
    return { level: "Moderate", color: "text-yellow-400" };
  }

  return { level: "Low", color: "text-emerald-400" };
}

export function computeNetworkConfidence(
  network: NetworkStatus,
  mempool: MempoolPressure,
): NetworkConfidence {
  const isCongested = network.label === "Congested";
  const isSlow = network.label === "Slow";

  if (isCongested && mempool.level === "High") {
    return { level: "Low", color: "text-red-400" };
  }

  if (isSlow || mempool.level === "Moderate") {
    return { level: "Medium", color: "text-yellow-400" };
  }

  return { level: "High", color: "text-emerald-400" };
}
