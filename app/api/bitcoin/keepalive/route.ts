export async function GET(req: Request) {
  const isCron = req.headers.get("x-vercel-cron");

  if (!isCron) {
    return new Response("Unauthorized", { status: 401 });
  }

  const baseUrl = process.env.CRYPTO_API_URL;

  await fetch(`${baseUrl}/v1/health`, {
    cache: "no-store",
  });

  return Response.json({ ok: true });
}
