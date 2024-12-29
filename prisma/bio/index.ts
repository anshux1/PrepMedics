import db from '../../src/db/'

const BioUnits = [
  {
    "unit": {
      "_id": "615d6ff644b529f0efd75275",
      "title": "Diversity of Living Organisms",
      "shortName": "Diversity of Living Organisms",
      "isVisible": true,
      "totalChapters": 4
    },
  },
  {
    "unit": {
      "_id": "615d6ff644b529f0efd75276",
      "title": "Structural Organisation in Plants & Animals",
      "shortName": "Structural Organisation in Plants & Animals",
      "isVisible": true,
      "totalChapters": 3
    },
  },
  {
    "unit": {
      "_id": "615d6ff644b529f0efd75277",
      "title": "Cell: Structure and Function",
      "shortName": "Cell: Structure and Function",
      "isVisible": true,
      "totalChapters": 3
    },
  },
  {
    "unit": {
      "_id": "615d6ff644b529f0efd75278",
      "title": "Plant Physiology",
      "shortName": "Plant Physiology",
      "isVisible": true,
      "totalChapters": 5
    },
  },
  {
    "unit": {
      "_id": "615d6ff644b529f0efd75279",
      "title": "Human Physiology",
      "shortName": "Human Physiology",
      "isVisible": true,
      "totalChapters": 7
    },
  },
  {
    "unit": {
      "_id": "615d6ff644b529f0efd7527a",
      "title": "Reproduction",
      "shortName": "Reproduction",
      "isVisible": true,
      "totalChapters": 4
    },
  },
  {
    "unit": {
      "_id": "615d6ff644b529f0efd7527b",
      "title": "Genetics and Evolution",
      "shortName": "Genetics and Evolution",
      "isVisible": true,
      "totalChapters": 3
    },
  },
  {
    "unit": {
      "_id": "615d6ff644b529f0efd7527c",
      "title": "Biology and Human Welfare",
      "shortName": "Biology and Human Welfare",
      "isVisible": true,
      "totalChapters": 3
    },
  },
  {
    "unit": {
      "_id": "615d6ff644b529f0efd7527d",
      "title": "Biotechnology and its Applications",
      "shortName": "Biotechnology and its Applications",
      "isVisible": true,
      "totalChapters": 2
    },
  },
  {
    "unit": {
      "_id": "615d6ff644b529f0efd7527e",
      "title": "Ecology and Environment",
      "shortName": "Ecology and Environment",
      "isVisible": true,
      "totalChapters": 4
    },
  }
]


export const seedUnits = async () => {
  console.log("Seeding units...")
  BioUnits.forEach(async (item) => {
    await db.unit.create({
      data: {
        unitName: item.unit.title,
        shortName: item.unit.shortName,
        isVisible: item.unit.isVisible,
        subjectId: "cm576qbyf0000cyz7ljtztrq9",
        totalChapters: item.unit.totalChapters,
      }
    })
  })
  const data = await db.unit.findMany()
  console.log("Seeded Units:", data)
}
