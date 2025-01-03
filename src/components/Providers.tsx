"use client"

import { ReactNode } from "react"
import { SessionProvider } from "next-auth/react"

import { ThemeProvider } from "@/components/theme-provider"

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <SessionProvider>{children}</SessionProvider>
    </ThemeProvider>
  )
}
