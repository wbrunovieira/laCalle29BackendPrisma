import { prisma } from "../database/prismaClient"
import { hash } from 'bcryptjs';
import AppError from "../errors/AppError";
prisma

interface ICreateAdmin {
    name: string;
    email: string;
    password: string;


}
export class CreateAdminService {
    async execute({ name, email, password }:ICreateAdmin) {

        const emailExists = await prisma.admin.findFirst({
            where: {
               email: {
                   equals: email,
                   mode: 'insensitive',
            },
                name: {
                    equals: name,
                    mode: 'insensitive',
                }

            },
        });

        if(emailExists) {
            throw new AppError('email ou nome ja existe !')
        }

        const hashedPassword = await hash(password, 10);

        const user = await prisma.admin.create({
            data: {
                name,
                email,
                password:hashedPassword,
            },
        });

        return user;


    }
}
