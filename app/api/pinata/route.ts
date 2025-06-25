import pinataSDK from "@pinata/sdk";
import { NextResponse } from "next/server"; // Import NextResponse for App Router responses
import { Readable } from "stream"; // Node.js stream API for creating a readable stream from JSON

// The HTTP POST handler for this API route
export async function POST(request: Request) {
  const data = await request.json();

  console.log(data);

  // Basic validation
  if (data?.id === undefined || !data?.name || !data?.role || !data?.message) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  try {
    const pinata = new pinataSDK(
      process.env.PINATA_API_KEY!,
      process.env.PINATA_API_SECRET!
    );

    const contentWithTimestamp = {
      ...data,
      createdAt: new Date().toISOString(), // ensures content changes
    };

    const jsonString = JSON.stringify(contentWithTimestamp);
    const readableStream = Readable.from([jsonString]);

    const fileName = `${data.id}-${Date.now()}.json`;

    const options = {
      pinataMetadata: {
        name: fileName,
      },
    };

    const pinResult = await pinata.pinFileToIPFS(readableStream, options);

    return NextResponse.json({ cid: pinResult.IpfsHash }, { status: 200 });
  } catch (err) {
    console.error("Pinata upload failed:", err);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
