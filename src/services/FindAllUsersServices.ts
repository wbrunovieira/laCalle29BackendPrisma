import { prisma } from '../database/prismaClient'

export class FindAllUsersService {
    async execute() {
        const users = await prisma.users.findMany({
            select: {
                id_user:true,
                name:true,
                email:true,
                created_at:true,
                updated_at:true,

            },


        })

        return users;
    }
}
