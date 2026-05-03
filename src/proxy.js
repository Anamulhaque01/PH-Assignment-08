import { NextResponse } from "next/server";


export function proxy(request) {

    const sessionToken =
        request.cookies.get("better-auth.session_token") ||
        request.cookies.get("__Secure-better-auth.session_token");

    const { pathname } = request.nextUrl;

    const isPrivateRoute =
        (pathname.startsWith("/animals/") && pathname !== "/animals") ||
        pathname.startsWith("/my-profile");

    if (isPrivateRoute && !sessionToken) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    if (sessionToken && (pathname === "/login" || pathname === "/register")) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/animals/:id+",
        "/my-profile/:path*"
    ],
};