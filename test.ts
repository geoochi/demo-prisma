import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // const user = await prisma.user.create({
  //   data: {
  //     email: 'alice@prisma.io',
  //     name: 'Alice',
  //   },
  // })
  // console.log(user)
  // const post = await prisma.post.create({
  //   data: {
  //     authorId: user.id,
  //     title: 'Hello World',
  //     content: 'This is a test post',
  //   },
  // })
  // console.log(post)
  const res = await prisma.post.create({
    data: {
      authorId: 1,
      title: 'new title',
    },
  })
  console.log(res)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
  })
