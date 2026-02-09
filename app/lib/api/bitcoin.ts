import {
  BitcoinCorrelation,
  BitcoinFees,
  BitcoinMempool,
  BitcoinNetwork,
  BitcoinValuation,
} from "../bitcoin/types";

/**
 * Internal generic fetcher for Bitcoin local API routes
 * @param endpoint The local route path (e.g., 'network', 'fees')
 */
async function fetchBitcoinData<T>(endpoint: string): Promise<T> {
  const res = await fetch(`/api/bitcoin/${endpoint}`);

  if (!res.ok) {
    throw new Error(`Failed to fetch Bitcoin ${endpoint}`);
  }

  return res.json() as Promise<T>;
}

// Public API functions using the generic fetcher
export const getBitcoinNetwork = () =>
  fetchBitcoinData<BitcoinNetwork>("network");
export const getBitcoinFees = () => fetchBitcoinData<BitcoinFees>("fees");
export const getBitcoinMempool = () =>
  fetchBitcoinData<BitcoinMempool>("mempool");
export const getBitcoinValuation = () =>
  fetchBitcoinData<BitcoinValuation>("valuation");
export const getBitcoinCorrelation = () =>
  fetchBitcoinData<BitcoinCorrelation>("correlation");
