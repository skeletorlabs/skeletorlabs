import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/api")) {
    const origin = request.headers.get("origin") || "";
    const referer = request.headers.get("referer") || "";
    const isCronHeader = request.headers.get("x-vercel-cron");
    const userAgent = request.headers.get("user-agent") || "";

    const isDev = process.env.NODE_ENV === "development";

    const allowedDomains = [
      "https://skeletorlabs.xyz",
      "https://www.skeletorlabs.xyz",
      "https://test.skeletorlabs.xyz",
    ];

    if (isCronHeader || userAgent.includes("vercel-cron")) {
      return NextResponse.next();
    }

    if (
      isDev &&
      (origin.startsWith("http://localhost") ||
        referer.startsWith("http://localhost"))
    ) {
      return NextResponse.next();
    }

    const isAllowed = allowedDomains.some(
      (domain) => origin.startsWith(domain) || referer.startsWith(domain),
    );

    if (!isAllowed) {
      console.warn(`[Proxy] Access Blocked: ${origin || referer || "unknown"}`);
      return new NextResponse("Forbidden", { status: 403 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*"],
};
