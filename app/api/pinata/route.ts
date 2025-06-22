import pinataSDK from "@pinata/sdk";
import { NextResponse } from "next/server"; // Import NextResponse for App Router responses
import { Readable } from "stream"; // Node.js stream API for creating a readable stream from JSON

// The HTTP POST handler for this API route
export async function POST(request: Request) {
  const data = await request.json();

  // Basic validation
  if (!data?.address || !data?.name || !data?.role || !data?.message) {
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

    const jsonString = JSON.stringify(data);
    const readableStream = Readable.from([jsonString]);
    const fileName = `testimonial-${data.address.toLowerCase()}-testimonial-${Date.now()}.json`;

    const options = {
      pinataMetadata: {
        name: fileName, // Use the full path here
      },
    };

    const pinResult = await pinata.pinFileToIPFS(readableStream, options);

    return NextResponse.json({ cid: pinResult.IpfsHash }, { status: 200 });
  } catch (err) {
    console.error("Pinata upload failed:", err);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}

// export async function GET() {
//   try {
//     const pinata = new pinataSDK(
//       process.env.PINATA_API_KEY!,
//       process.env.PINATA_API_SECRET!
//     );

//     const result = await pinata.pinList({
//       status: "pinned",
//       metadata: {
//         keyvalues: {
//           type: {
//             value: "testimonial",
//             op: "eq",
//           },
//         },
//       },
//     });

//     console.log("result", result);

//     // Return the list of CIDs
//     const testimonials = result.rows.map((row) => ({
//       name: row.metadata.name,
//       cid: row.ipfs_pin_hash,
//     }));

//     return NextResponse.json({ testimonials }, { status: 200 });
//   } catch (error) {
//     console.error("Error listing testimonials:", error);
//     return NextResponse.json(
//       { error: "Failed to fetch testimonials" },
//       { status: 500 }
//     );
//   }
// }
