import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const cronHeader = req.headers.get("x-vercel-cron");
  const userAgent = req.headers.get("user-agent") || "";

  const isCron =
    cronHeader === "1" || userAgent.toLowerCase().includes("vercel-cron");

  if (!isCron) {
    console.warn("[Keepalive] Blocked: Not a Vercel Cron request");
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const baseUrl = process.env.CRYPTO_API_URL;
  if (!baseUrl) {
    return new NextResponse("Missing CRYPTO_API_URL", { status: 500 });
  }

  try {
    const response = await fetch(`${baseUrl}/v1/health`, {
      cache: "no-store",
      signal: AbortSignal.timeout(5000),
    });

    return NextResponse.json({
      ok: response.ok,
      status: response.status,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("[Keepalive] Fetch failed:", error);
    return NextResponse.json(
      { ok: false, error: "External API unreachable" },
      { status: 502 },
    );
  }
}
