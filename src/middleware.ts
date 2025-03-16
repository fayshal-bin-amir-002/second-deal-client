import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./services/auth";

const roleBasedPrivateRoutes = {
  user: [/^\/user(\/|$)/, /^\/profile/, /^\/messages/],
  admin: [/^\/admin(\/|$)/, /^\/profile/],
};

const authRoutes = ["/login", "/register"];
type Role = keyof typeof roleBasedPrivateRoutes;

export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const userData = await getCurrentUser();
  if (!userData) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(
          `https://seconddeal-backend-production.up.railway.app/login?redirectPath=${pathname}`,
          request.url
        )
      );
    }
  }

  if (userData?.role && roleBasedPrivateRoutes[userData?.role as Role]) {
    const routes = roleBasedPrivateRoutes[userData?.role as Role];
    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
  return NextResponse.redirect(new URL("/", request.url));
};

export const config = {
  matcher: [
    "/login",
    "/register",
    "/profile",
    "/messages",
    "/messages/:path*",
    "/admin",
    "/admin/:path*",
    "/user",
    "/user/:path*",
  ],
};
