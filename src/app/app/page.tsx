import React from "react"
import Image from "next/image"
import Link from "next/link"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { getExams } from "@/actions/common"

export default async function page() {
  const exams = await getExams()
  return (
    <>
      {exams.data?.map((exam) => (
        <Link key={exam.id} href={`/app/${exam.id}`}>
          <Card>
            <CardHeader>
              <CardTitle>{exam.examName}</CardTitle>
              <CardDescription>{exam.Years.length} Papers</CardDescription>
            </CardHeader>
            <CardContent className="px-20">
              <Image
                src={exam.examLogo}
                width={100}
                height={100}
                alt={exam.examName}
              />
            </CardContent>
          </Card>
        </Link>
      ))}
    </>
  )
}
