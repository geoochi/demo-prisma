# Prisma demo

1. Install dependencies

```bash
pnpm add -D prisma
```

2. Initialize Prisma

```bash
pnpm prisma init --datasource-provider sqlite
```

3. add models to the schema.prisma

```prisma
model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
  posts Post[]
}

model Post {
  id        Int     @id @default(autoincrement())
  title     String
  content   String?
  published Boolean @default(false)
  author    User    @relation(fields: [authorId], references: [id])
  authorId  Int
}
```

4. Generate Prisma client

```bash
pnpm prisma generate
```

5. initialize the database

```bash
pnpm prisma db push
```

6. create a new user and a new post

```typescript
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@prisma.io',
    },
  })
  console.log(user)
  const post = await prisma.post.create({
    data: {
      title: 'Hello World',
      content: 'This is a test post',
      authorId: user.id,
    },
  })
  console.log(post)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
  })
```

7. start the prisma studio

```bash
pnpm prisma studio
```

8. modify model

- change model

```prisma
model Post {
  id        Int     @id @default(autoincrement())
  authorId  Int
  author    User    @relation(fields: [authorId], references: [id])
  title     String
  content   String?
  // published Boolean @default(false)
}
```

- generate

```bash
pnpm prisma generate
```

   - update db

```bash
pnpm prisma db push
```
