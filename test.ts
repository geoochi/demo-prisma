import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// 1. create a new user
const user = await prisma.user.create({
  data: {
    email: `alice@${Math.random().toString(36).substring(2, 6)}.com`,
    name: 'Alice',
  },
})
console.log('\x1b[32m%s\x1b[0m', 'created user:')
console.log(user)

// 2. create a new post
const post = await prisma.post.create({
  data: {
    authorId: user.id,
    title: 'Hello World',
    content: 'This is a test post',
  },
})
console.log('\x1b[32m%s\x1b[0m', 'created post:')
console.log(post)

// 3. delete the post
const post2 = await prisma.post.delete({
  where: {
    id: post.id,
  },
})
console.log('\x1b[32m%s\x1b[0m', 'deleted post:')
console.log(post2)

// 4. create a new post
const post3 = await prisma.post.create({
  data: {
    authorId: user.id,
    title: 'Hello World 2',
    content: 'This is a test post 2',
  },
})
console.log('\x1b[32m%s\x1b[0m', 'created post:')
console.log(post3)

// 5. delete the user
const user2 = await prisma.user.delete({
  where: {
    id: user.id,
  },
})
console.log('\x1b[32m%s\x1b[0m', 'deleted user:')
console.log(user2)
