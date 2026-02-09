import { createProxyHandler } from "@/app/lib/api/proxy";

export const dynamic = "force-dynamic";

export async function GET() {
  return createProxyHandler("/v1/bitcoin/network");
}
