import { prisma } from '.'

import type { User } from '@prisma/client'

const DEFAULT_USERS = [
  // Add your own user to pre-populate the database with
  {
    name: 'Tim Apple',
    email: 'tim@apple.com'
  }
] as Array<Partial<User>>

;(async () => {
  try {
    await Promise.all(
      DEFAULT_USERS.map((user) =>
        prisma.user.create({
          data: {
            email: user.email!
          }
        })
      )
    )
  } catch (error) {
    console.error(error)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
})()
