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