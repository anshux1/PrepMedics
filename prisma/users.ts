import db from '../src/db'

const Users = [
  {
    "id": "cl1h1a2b1000a0g0b1h1a2b1",
    "email": "alice.smith@example.com",
    "name": "Alice Smith",
    "password": "password123",
    "image": "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    "id": "cl1h1a2b1000a0g0b1h1a2b2",
    "email": "bob.johnson@example.com",
    "name": "Bob Johnson",
    "password": "password123",
    "image": "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    "id": "cl1h1a2b1000a0g0b1h1a2b3",
    "email": "carol.brown@example.com",
    "name": "Carol Brown",
    "password": "password123",
    "image": "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    "id": "cl1h1a2b1000a0g0b1h1a2b4",
    "email": "dave.wilson@example.com",
    "name": "Dave Wilson",
    "password": "password123",
    "image": "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    "id": "cl1h1a2b1000a0g0b1h1a2b5",
    "email": "eve.davis@example.com",
    "name": "Eve Davis",
    "password": "password123",
    "image": "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    "id": "cl1h1a2b1000a0g0b1h1a2b6",
    "email": "frank.miller@example.com",
    "name": "Frank Miller",
    "password": "password123",
    "image": "https://randomuser.me/api/portraits/men/3.jpg",
  }
]

export const seedUsers = async () => {
  console.log("Seeding users...")
  Users.forEach(async (user) => {
    await db.user.create({
      data: {
        id: user.id,
        email: user.email,
        name: user.name,
        password: user.password,
        image: user.image
      }
    })
  })
  const users = await db.user.findMany()
  console.log("Seeded users:", users)
}
