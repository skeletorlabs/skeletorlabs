// proxy.ts
import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Aplica apenas para rotas de API
  if (pathname.startsWith("/api")) {
    const origin = request.headers.get("origin") || "";
    const referer = request.headers.get("referer") || "";

    const isDev = process.env.NODE_ENV === "development";

    const allowedDomains = [
      "https://skeletorlabs.xyz",
      "https://www.skeletorlabs.xyz",
      "https://test.skeletorlabs.xyz",
    ];

    // Validação de origem/referer
    const isAllowed = isDev
      ? origin.startsWith("http://localhost") ||
        referer.startsWith("http://localhost")
      : allowedDomains.some(
          (domain) => origin.startsWith(domain) || referer.startsWith(domain)
        );

    if (!isAllowed) {
      // Log discreto para debug em produção, se necessário
      console.warn(`[Proxy] Acesso bloqueado: ${origin || referer}`);
      return new NextResponse("Forbidden", { status: 403 });
    }
  }

  return NextResponse.next();
}

// O matcher continua funcionando da mesma forma no proxy.ts
export const config = {
  matcher: ["/api/:path*"],
};
