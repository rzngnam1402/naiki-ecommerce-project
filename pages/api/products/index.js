import { products } from '../../../data';
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export default async function getAllSneakers(req, res) {
    const getAllSneakers = await prisma.shoes.findMany();

    try {
        res.json(getAllSneakers || products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}