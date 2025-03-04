import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./services/auth";

const roleBasedPrivateRoutes = {
  user: [/^\/user(\/|$)/, /^\/profile/],
  admin: [/^\/admin(\/|$)/],
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
          `http://localhost:3000/login?redirectPath=${pathname}`,
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
    "/admin",
    "/admin/:path*",
    "/user",
    "/user/:path*",
  ],
};
