import React, { ReactNode } from "react"

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto flex max-w-7xl gap-5 border p-5">{children}</div>
  )
}
