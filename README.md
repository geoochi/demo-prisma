# Prisma demo

1. Install dependencies

```bash
pnpm add -D prisma && pnpm add @prisma/client
pnpm approve-builds
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
  authorId  Int
  author    User    @relation(fields: [authorId], references: [id], onDelete: Cascade)
  title     String
  content   String?
}
```

4. create a new db

```bash
pnpm prisma db push
```

5. run test.ts

```bash
node test.ts
```

6. monitor the database (optional)

```bash
pnpm prisma studio
```
