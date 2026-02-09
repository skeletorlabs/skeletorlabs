export type Meta = {
  updatedAt: string;
  cached: boolean;
};

export type NetworkTrend = "Improving" | "Stable" | "Worsening";

export type BitcoinHalving = {
  currentBlock: number;
  nextHalvingBlock: number;
  blocksRemaining: number;
  progressPercent: number;
  estimatedDate: string;
  currentSubsidy: number;
  nextSubsidy: number;
};

export type BitcoinNetwork = {
  meta: Meta;
  blockHeight: number;
  hashrateTHs: number;
  difficulty: number;
  avgBlockTimeSeconds: number;
  trend: NetworkTrend;
  halving: BitcoinHalving;
};

export type BitcoinFees = {
  meta: Meta;
  low: number;
  medium: number;
  high: number;
};

export type BitcoinMempool = {
  meta: Meta;
  count: number;
  vsize: number;
  totalFee: number;
};

export type BitcoinValuation = {
  meta: Meta;
  btcPrice: number;
  m2SupplyBillions: number;
  ratio: number;
  description: string;
};

export type BitcoinCorrelation = {
  meta: Meta;
  coefficient: number;
  sample_count: number;
  start_date: string;
  end_date: string;
};

export type ValuationStatus = {
  label: "UNDERVALUED" | "FAIR VALUE" | "OVERVALUED";
  color: string;
  bar: string;
};

export type CorrelationStrength =
  | "STRONG CORRELATION"
  | "MODERATE CORRELATION"
  | "WEAK CORRELATION";

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
