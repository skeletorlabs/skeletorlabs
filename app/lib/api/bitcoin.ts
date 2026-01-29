export type BitcoinNetworkResponse = {
  blockHeight: number;
  hashrateTHs: number;
  difficulty: number;
  avgBlockTimeSeconds: number;
  cached: boolean;
};

export async function getBitcoinNetwork() {
  const res = await fetch("/api/bitcoin/network");

  if (!res.ok) {
    throw new Error("Failed to fetch Bitcoin network");
  }

  return res.json() as Promise<BitcoinNetworkResponse>;
}

export type BitcoinFeesResponse = {
  low: number;
  medium: number;
  high: number;
  cached: boolean;
};

export async function getBitcoinFees() {
  const res = await fetch("/api/bitcoin/fees");

  if (!res.ok) {
    throw new Error("Failed to fetch Bitcoin fees");
  }

  return res.json() as Promise<BitcoinFeesResponse>;
}
