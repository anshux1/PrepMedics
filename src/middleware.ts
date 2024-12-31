import { NextResponse } from "next/server"
import NextAuth from "next-auth"

import authConfig from "@/lib/auth.config"
import { authRoutes, DEFAULT_REDIRECT, publicRoutes } from "./lib/auth.routes"

const { auth } = NextAuth(authConfig)

export default auth((req) => {
  const { nextUrl } = req
  const isLoggedIn = !!req.auth

  const isPublicRoute = publicRoutes.includes(nextUrl.pathname)
  const isAuthRoute = authRoutes.includes(nextUrl.pathname)

  if (isAuthRoute || isPublicRoute) {
    if (isLoggedIn) {
      return NextResponse.redirect(
        new URL(DEFAULT_REDIRECT, nextUrl).toString(),
      )
    }
    return NextResponse.next()
  }

  if (!isPublicRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL("/auth", nextUrl))
  }
  return NextResponse.next()
})

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/(api|trpc)(.*)"],
}
