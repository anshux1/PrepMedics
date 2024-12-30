"use server"

import db from "@/db"

export const getExams = async () => {
  try {
    const exams = await db.exam.findMany()
    return { data: exams }
  } catch (error) {
    console.log(error)
    return { error: "Failed to fetch exams!" }
  }
}
