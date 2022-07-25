const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
    const getAllSneakers = await prisma.shoes.findMany()
    console.log(getAllSneakers);
}

main()
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })