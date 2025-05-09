import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const create = async (userId) => {
    const result = await prisma.session.create({
        data: {userId}
    })
    return result
}