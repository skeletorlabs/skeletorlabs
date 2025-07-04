// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Apply only to API routes
  if (pathname.startsWith("/api")) {
    const origin = request.headers.get("origin") || "";
    const referer = request.headers.get("referer") || "";

    const isDev = process.env.NODE_ENV === "development";
    const allowedProdDomain = "https://skeletorlabs.xyz";

    const isAllowed = isDev
      ? origin.startsWith("http://localhost") ||
        referer.startsWith("http://localhost")
      : origin.startsWith(allowedProdDomain) ||
        referer.startsWith(allowedProdDomain);

    if (!isAllowed) {
      return new NextResponse("Forbidden", { status: 403 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*"],
};
