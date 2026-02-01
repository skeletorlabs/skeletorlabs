export type BitcoinNetwork = {
  blockHeight: number;
  hashrateTHs: number;
  difficulty: number;
  avgBlockTimeSeconds: number;
  cached: boolean;
};

export type BitcoinFees = {
  low: number;
  medium: number;
  high: number;
  cached: boolean;
};

export type BitcoinMempool = {
  count: number;
  vsize: number;
  totalFee: number;
  cached: boolean;
};

export type PressureLevel = "Low" | "Moderate" | "High";

export type NetworkConfidence = {
  level: "High" | "Medium" | "Low";
  color: string;
};

export type NetworkStatus = {
  label: "Normal" | "Slow" | "Congested";
  color: string;
};

export type MempoolPressure = {
  level: "Low" | "Moderate" | "High";
  color: string;
};
