import { Request, Response,NextFunction } from "express";
import { CreateUserService } from "../services/CreateUserService";


export class CreateUserController {
    async handle(request: Request, response: Response, next: NextFunction) {
        const { name, email, password, phone } = request.body;

        const createUserService = new CreateUserService();

        const result = await createUserService.execute({
             name,
             email,
             password,
             phone
        });

        return response.json(result)
    }
}
