import db from "../src/db"
import { seedUnits } from "./bio"
import { seedChapters } from "./bio/Reproduction"
import { seedQuestions } from "./bio/Reproduction/humanRepo"
import { seedExamsYears } from "./exam-years"
import { seedSubjects } from "./subject"


async function seedDatabase() {
  try {
    await seedQuestions()
  } catch (error) {
    console.error("Error seeding database:", error)
    throw error
  } finally {
    db.$disconnect()
  }
}

seedDatabase().catch((error) => {
  console.error("An unexpected error occurred during seeding:", error)
  process.exit(1)
})
