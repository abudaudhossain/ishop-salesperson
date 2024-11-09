import { NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// Internationalization middleware
const intlMiddleware = createMiddleware(routing);

export async function middleware(request) {
    const acceptLanguage = request.headers.get('accept-language');
    console.log("Accept-Language header: ", acceptLanguage);

    // Run the internationalization middleware to process i18n routes
    const intlResponse = intlMiddleware(request);

    // Extract pathname and locale from the request URL
    const pathname = request.nextUrl.pathname;
    const locale = pathname.split("/")[1]; // Assuming the locale is the first part of the path (e.g., /en/form)
    console.log("pathname: ", pathname);
    // Authentication logic for specific routes
    const isAuthRoute =
        pathname.startsWith("/form") || pathname.startsWith(`/${locale}/form`);
    const isLoginRoute =
        pathname.startsWith("/login") ||
        pathname.startsWith(`/${locale}/login`);

    // Get authentication-related cookies
    const userCookie = request.cookies.get("email");
    const nextLocal = request.cookies.get("NEXT_LOCALE");
    if (!nextLocal?.value) {
        return intlResponse;
    }
    console.log("user cookie", userCookie);

    if (isAuthRoute) {
        if (!userCookie?.value) {
            console.log("User not logged in, redirecting to /login");
            return NextResponse.redirect(
                new URL(`/${nextLocal?.value}/login`, request.url)
            );
        }
    }

    if (isLoginRoute) {
        if (userCookie) {
            console.log("User already logged in, redirecting to home");
            return NextResponse.redirect(
                new URL(`/${nextLocal.value}/`, request.url)
            );
        }
    }

    // If no redirects occurred, return the response from the intlMiddleware or proceed to the next middleware
    return intlResponse || NextResponse.next();
}

// Middleware configuration
export const config = {
    matcher: ["/", "/(de|en)/:path*", "/form", "/login", "/test", "/post"],
};
