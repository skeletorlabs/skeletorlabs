import { NextResponse } from "next/server";

/**
 * Generic proxy handler for Crypto-API requests
 * @param endpoint The specific API path (e.g., '/v1/bitcoin/correlation')
 */
export async function createProxyHandler(endpoint: string) {
  try {
    const res = await fetch(`${process.env.CRYPTO_API_URL}${endpoint}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "User-Agent": "curl/7.68.0",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      return NextResponse.json({ error: "Upstream error" }, { status: 502 });
    }

    const data = await res.json();

    // Standard cache headers for all proxied routes
    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "public, s-maxage=15, stale-while-revalidate=45",
      },
    });
  } catch (err) {
    console.error(`Proxy error at ${endpoint}:`, err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
