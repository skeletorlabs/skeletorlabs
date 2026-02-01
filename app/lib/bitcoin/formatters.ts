import { NetworkStatus } from "./types";

export function formatHashrateTHs(ths: number): string {
  const ehs = ths / 1_000_000;
  if (ehs >= 1000) {
    return `${(ehs / 1000).toFixed(2)} ZH/s`;
  }
  return `${ehs.toFixed(1)} EH/s`;
}

export function formatBlockTime(seconds: number): string {
  const minutes = seconds / 60;
  if (minutes < 1.5) return `${Math.round(seconds)} sec`;
  return Number.isInteger(minutes)
    ? `${minutes} min`
    : `${minutes.toFixed(1)} min`;
}

export function formatDifficulty(diff: number): string {
  const trillion = diff / 1e12;
  if (trillion >= 1000) {
    return `${(trillion / 1000).toFixed(2)} Q`;
  }
  return `${trillion.toFixed(1)} T`;
}

export function formatNetworkStatus(
  avgBlockTimeSeconds: number,
): NetworkStatus {
  if (avgBlockTimeSeconds <= 12 * 60) {
    return { label: "Normal", color: "text-emerald-400" };
  }
  if (avgBlockTimeSeconds <= 18 * 60) {
    return { label: "Slow", color: "text-yellow-400" };
  }
  return { label: "Congested", color: "text-red-400" };
}
export function formatFeeLabel(status: NetworkStatus["label"]) {
  switch (status) {
    case "Congested":
      return "High priority";
    case "Slow":
      return "Medium priority";
    default:
      return "Normal priority";
  }
}
