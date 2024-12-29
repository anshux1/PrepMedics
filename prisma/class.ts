
import db from '../src/db'

const Class = [
  {
    name: "Class 11"
  },
  {
    name: "Class 12"
  }
]

export const seedClass = async () => {
  console.log("Seeding users...")
  Class.forEach(async (item) => {
    await db.class.create({
      data: {
        className: item.name
      }
    })
  })
  const data = await db.class.findMany()
  console.log("Seeded class:", data)
}
