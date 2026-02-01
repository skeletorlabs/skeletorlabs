import { BitcoinFees, BitcoinMempool, BitcoinNetwork } from "../bitcoin/types";

export async function getBitcoinNetwork() {
  const res = await fetch("/api/bitcoin/network");

  if (!res.ok) {
    throw new Error("Failed to fetch Bitcoin network");
  }

  return res.json() as Promise<BitcoinNetwork>;
}

export async function getBitcoinFees() {
  const res = await fetch("/api/bitcoin/fees");

  if (!res.ok) throw new Error("Failed to fetch Bitcoin fees");
  return res.json() as Promise<BitcoinFees>;
}

export async function getBitcoinMempool() {
  const res = await fetch("/api/bitcoin/mempool");

  if (!res.ok) throw new Error("Failed to fetch Bitcoin mempool");
  return res.json() as Promise<BitcoinMempool>;
}
