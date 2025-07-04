import { NextResponse } from "next/server";

export async function POST() {
  const PINATA_CLOUD = process.env.PINATA_CLOUD as string;
  const BASE_RPC_HTTPS = process.env.BASE_RPC_HTTPS as string;

  return NextResponse.json(
    { pinataCloud: PINATA_CLOUD, baseRPC: BASE_RPC_HTTPS },
    { status: 200 }
  );
}
