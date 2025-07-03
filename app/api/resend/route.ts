import { Resend } from "resend";
import { NextResponse } from "next/server"; // Import NextResponse for App Router responses

// The HTTP POST handler for this API route
export async function POST(request: Request) {
  const data = await request.json();

  // Basic validation
  if (!data?.email || !data?.title || !data?.message) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const emailTo = process.env.RESEND_EMAIL_TO as string;

    resend.emails.send({
      from: "onboarding@resend.dev",
      to: emailTo,
      subject: data.title,
      html: `
        <div>
          <p>${data.email}</p>
          <p>${data.message}</p>
        </div>`,
    });

    return NextResponse.json({ status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed sending email" },
      { status: 500 }
    );
  }
}
