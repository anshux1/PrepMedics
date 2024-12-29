import db from '../src/db'

const Subjects = [
  {
    "title": "Biology",
    "shortName": "Bio",
  },
  {
    "title": "Physics",
    "shortName": "Phy",
  },
  {
    "title": "Chemistry",
    "shortName": "Chemi",
  }
]

export const seedSubjects = async () => {
  console.log("Seeding users...")
  Subjects.forEach(async (sub) => {
    await db.subject.create({
      data: {
        shortName: sub.shortName,
        subjectName: sub.shortName
      }
    })
  })
  const data = await db.subject.findMany()
  console.log("Seeded Subs:", data)
}
