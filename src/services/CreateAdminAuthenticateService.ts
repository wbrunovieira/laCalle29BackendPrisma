import { prisma } from "../database/prismaClient";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import AppError from "../errors/AppError";

interface IAuthenticateAdmin{

    email: string;
    password: string;
}
export class AutheticateAdminService {
    async execute({ email, password }:IAuthenticateAdmin) {

        const user = await prisma.admin.findFirst({
            where: {
                email
            }
        })

        if(!user) {
            throw new AppError("email or password invalid.")
        }

        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch) {
            throw new Error("Username or password invalid.")
        }

        const token = sign({ email }, "adminadminadmin",{
            subject: user.id_admin,
            expiresIn:"1d"
        })

        return token;


    }

}
