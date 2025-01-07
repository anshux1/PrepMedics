"use client"

import React, { useMemo, useState } from "react"

import { Years } from "@prisma/client"

interface SubjectHeaderProps {
  yearsData: Years[]
  questionCount: number
}

export default function SubjectHeader({
  questionCount,
  yearsData,
}: SubjectHeaderProps) {
  const [years, setYears] = useState<number[]>([])
  useMemo(() => {
    yearsData.forEach((item) => {
      const a = parseInt(item.yearShortName.slice(0, 5))
      setYears((prev) => [...prev, a].sort((a, b) => a - b))
    })
  }, yearsData)
  return (
    <div className="flex gap-3 pl-16">
      <HeaderItem title="Papers:" value={yearsData.length} />
      <HeaderItem
        title="Years:"
        value={`${years[years.length - 1]} - ${years[0]}`}
      />
      <HeaderItem title="Questions:" value={questionCount} />
    </div>
  )
}

interface SubectHeaderItemProps {
  title: string
  value: number | string
}

export const HeaderItem = ({ title, value }: SubectHeaderItemProps) => {
  return (
    <h3 className="font-semibold">
      {title} <span className="font-normal">{value}</span>
    </h3>
  )
}
