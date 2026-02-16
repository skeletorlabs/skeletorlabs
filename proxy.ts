import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Applies only to API routes
  if (pathname.startsWith("/api")) {
    const origin = request.headers.get("origin") || "";
    const referer = request.headers.get("referer") || "";
    const isCron = request.headers.get("x-vercel-cron");

    const isDev = process.env.NODE_ENV === "development";

    const allowedDomains = [
      "https://skeletorlabs.xyz",
      "https://www.skeletorlabs.xyz",
      "https://test.skeletorlabs.xyz",
    ];

    // 🔓 Permits Vercel Cron (official header)
    if (isCron) {
      return NextResponse.next();
    }

    // 🔓 Permite localhost em dev
    if (
      isDev &&
      (origin.startsWith("http://localhost") ||
        referer.startsWith("http://localhost"))
    ) {
      return NextResponse.next();
    }

    // Domain validation for production
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
