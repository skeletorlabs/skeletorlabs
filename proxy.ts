import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (pathname.startsWith("/api")) {
    const origin = request.headers.get("origin") || "";
    const referer = request.headers.get("referer") || "";

    const isCronHeader = request.headers.get("x-vercel-cron") === "1";
    const userAgent = request.headers.get("user-agent") || "";
    const isVercelCron =
      isCronHeader || userAgent.toLowerCase().includes("vercel-cron");

    const isDev = process.env.NODE_ENV === "development";

    const allowedDomains = [
      "https://skeletorlabs.xyz",
      "https://www.skeletorlabs.xyz",
      "https://test.skeletorlabs.xyz",
    ];

    if (isVercelCron) {
      return NextResponse.next();
    }

    const isAllowed = isDev
      ? origin.startsWith("http://localhost") ||
        referer.startsWith("http://localhost")
      : allowedDomains.some(
          (domain) => origin.startsWith(domain) || referer.startsWith(domain),
        );

    if (!isAllowed) {
      console.warn(
        `[Proxy] Acesso bloqueado: ${origin || referer || "unknown source"}`,
      );
      return new NextResponse("Forbidden", { status: 403 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*"],
};
