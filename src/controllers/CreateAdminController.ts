import { Request, Response, NextFunction } from "express";
import { CreateAdminService } from "../services/CreateAdminService";


export class CreateAdminController {
    async handle(request: Request, response: Response, next: NextFunction) {
        const { name, email, password } = request.body;

        const createAdminService = new CreateAdminService();

        const result = await createAdminService.execute({
             name,
             email,
             password,
        });

        return response.json(result)
    }
}
