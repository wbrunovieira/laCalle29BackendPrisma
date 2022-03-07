import { prisma } from "../database/prismaClient"

import AppError from "../errors/AppError";
prisma

interface ICreateAdress{
    adress: string;
    adress_complement: string;
    zip: string;
    zone: string;
    city: string;
    obs: string;
    user_id : string;

}

export class CreateAdressService {
    async execute({
        adress,
        adress_complement,
        zip,
        zone,
        city,
        obs,
        user_id
     }:ICreateAdress) {

        const newAdress = await prisma.adresses.create({
            data: {
                adress,
                adress_complement,
                zip,
                zone,
                city,
                obs,
                user_id :{
                    connect:{
                        id_user
                    }
                },
                include: { users: true}
            }
        })

        return newAdress;


    }
}
