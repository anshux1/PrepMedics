import db from "../../../src/db"

const Chapters = [
  {
    title: "Human Reproduction",
    importance: "High Output High Input",
    priority: 19,
    classId: "cm575g0zg0001cyw56komb7or",
    order: 25,
    subjectId: "cm576qbyf0000cyz7ljtztrq9",
    unitId: "cm57xekvu0009cy52x6nm6wmf",
    syllabusCategory: "noChange",
  },
  {
    title: "Reproduction in Organisms",
    importance: "Low Output High Input",
    priority: 32,
    classId: "cm575g0zg0001cyw56komb7or",
    subjectId: "cm576qbyf0000cyz7ljtztrq9",
    unitId: "cm57xekvu0009cy52x6nm6wmf",
    order: 24,
    syllabusCategory: "removed",
  }
]

export const seedChapters = async () => {
  console.log("Seeding Chapters...")
  Chapters.forEach(async (item) => {
    await db.chapter.create({
      data: {
        chapterName: item.title,
        importance: item.importance,
        priority: item.priority,
        order: item.order,
        SyllabusCategory: item.syllabusCategory,
        classId: item.classId,
        subjectId: item.subjectId,
        unitId: item.unitId,
      },
    })
  })
  const data = await db.chapter.findMany()
  console.log("Seeded Chapter:", data)
}
