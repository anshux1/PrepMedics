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
import SubjectHeader from "@/components/subjects/SubjectHeader"
import { getExamDetails, getSubjects } from "@/actions/common"

export default async function page({
  params,
}: {
  params: Promise<{ examId: string }>
}) {
  const examId = (await params).examId
  const examSubjects = await getSubjects(examId)
  const { data } = await getExamDetails(examId)
  return (
    <div>
      {data && (
        <div>
          <div className="flex items-center gap-4">
            <Image
              src={data.examLogo}
              width={40}
              height={40}
              alt={data.examName}
            />
            <h1 className="text-4xl font-bold">{data.examName}</h1>
          </div>
          <SubjectHeader yearsData={data.Years} questionCount={0} />
        </div>
      )}
      <div className="mt-10 flex gap-5">
        {examSubjects.data?.map((sub) => (
          <Link key={sub.id} href={`/app/${examId}/${sub.id}`}>
            <Card className="transition-all duration-200 hover:scale-105">
              <CardHeader>
                <CardTitle>{sub.subjectName}</CardTitle>
                <CardDescription>{sub.questionCount} Questions</CardDescription>
              </CardHeader>
              <CardContent className="px-20">
                <Image
                  src={sub.subjectImage}
                  width={100}
                  height={100}
                  alt={sub.subjectName}
                />
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
