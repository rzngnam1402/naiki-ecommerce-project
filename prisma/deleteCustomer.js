const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function updateCustomer(req, res) {
    await prisma.customer.delete({
        where: {
            customerid: 10,
        }
    })
}

updateCustomer()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })