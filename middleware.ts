// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Apply only to API routes
  if (pathname.startsWith("/api")) {
    const origin = request.headers.get("origin") || "";
    const referer = request.headers.get("referer") || "";

    const isDev = process.env.NODE_ENV === "development";
    const allowedProdDomains = [
      "https://skeletorlabs.xyz",
      "https://www.skeletorlabs.xyz",
      "https://test.skeletorlabs.xyz",
    ];

    const isAllowed = isDev
      ? origin.startsWith("http://localhost") ||
        referer.startsWith("http://localhost")
      : allowedProdDomains.some(
          (domain) => origin.startsWith(domain) || referer.startsWith(domain)
        );

    if (!isAllowed) {
      return new NextResponse("Forbidden", { status: 403 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*"],
};
