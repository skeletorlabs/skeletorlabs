import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const res = await fetch(`${process.env.CRYPTO_API_URL}/v1/bitcoin/fees`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "User-Agent": "curl/7.68.0",
      },
      cache: "no-store",
    });

    if (!res.ok)
      return NextResponse.json({ error: "Upstream error" }, { status: 502 });

    const data = await res.json();

    // Retornamos com headers que proíbem o browser de cachear a rota da API
    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "public, s-maxage=15, stale-while-revalidate=45",
      },
    });
  } catch (err) {
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
