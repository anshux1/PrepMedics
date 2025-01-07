import db from "../src/db/"

const Subjects = [
  {
    title: "Biology",
    shortName: "Bio",
    subjectImage:
      "https://prepmedics.blob.core.windows.net/prepmedics/botany.png",
  },
  {
    title: "Physics",
    shortName: "Phy",
    subjectImage:
      "https://prepmedics.blob.core.windows.net/prepmedics/physics-logo1.svg",
  },
  {
    title: "Chemistry",
    shortName: "Chemi",
    subjectImage:
      "https://prepmedics.blob.core.windows.net/prepmedics/molecular.png",
  },
]

export const seedSubjects = async () => {
  console.log("Seeding users...")
  Subjects.forEach(async (sub) => {
    await db.subject.create({
      data: {
        shortName: sub.shortName,
        subjectName: sub.shortName,
        examId: "cm5mndae10000cyv4jkhc6isr",
        subjectImage: sub.subjectImage,
      },
    })
  })
}

seedSubjects()
