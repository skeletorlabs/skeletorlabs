export async function GET() {
  const baseUrl = process.env.CRYPTO_API_URL;

  try {
    await fetch(`${baseUrl}/v1/health`, {
      cache: "no-store",
    });

    return Response.json({ ok: true });
  } catch (err) {
    return Response.json({ ok: false }, { status: 500 });
  }
}
