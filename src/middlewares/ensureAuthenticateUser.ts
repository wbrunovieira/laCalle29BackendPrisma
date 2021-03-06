import { Response,Request, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
    sub: string;
}

export async function ensureAuthenticateUse(request:Request, response:Response, next:NextFunction) {

    const authHeader = request.headers.authorization;

    if(!authHeader) {
        return response.status(401).json({
            message:"Token missing"
        })
    }

    const [  ,token] = authHeader.split(" ");

    try {

        const { sub }= verify(token, "useruseruser") as IPayload;

        request.id_user  = sub;

        return next();

    } catch (err) {
        return response.status(401).json({
            message:"invalid token"
        })

    }
    return

}
