"use server"

import db from "@/db"

export const getExams = async () => {
  try {
    const exams = await db.exam.findMany({
      include: {
        Years: {
          select: {
            id: true,
          },
        },
      },
    })
    return { data: exams }
  } catch (error) {
    console.log(error)
    return { error: "Failed to fetch exams!" }
  }
}

export const getSubjects = async (examId: string) => {
  try {
    const subjects = await db.subject.findMany({
      where: {
        examId
      }
    })
    return { data: subjects }
  } catch (error) {
    console.log(error)
    return { error: "Failed to fetch subjects!" }
  }
}

export const getExamDetails = async (examId: string) => {
  try {
    const exam = await db.exam.findUnique({
      where: { id: examId },
      include: {
        Years: true,
      },
    })
    return { data: exam }
  } catch (error) {
    console.log(error)
    return { error: "Failed to fetch exam details!" }
  }
}
