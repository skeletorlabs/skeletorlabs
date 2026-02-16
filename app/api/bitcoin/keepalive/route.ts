import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const isCron = req.headers.get("x-vercel-cron");

  if (!isCron) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const baseUrl = process.env.CRYPTO_API_URL;

  if (!baseUrl) {
    return new NextResponse("Missing CRYPTO_API_URL", { status: 500 });
  }

  await fetch(`${baseUrl}/v1/health`, {
    cache: "no-store",
  });

  return NextResponse.json({ ok: true });
}
