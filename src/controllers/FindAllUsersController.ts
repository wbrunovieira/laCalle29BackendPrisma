import { Request, Response, NextFunction } from "express";

import { FindAllUsersService } from "../services/FindAllUsersServices";

export class FindAllUsersController {
    async handle(request: Request, response: Response) {

        const findAllUsers = new FindAllUsersService();

        const result = await findAllUsers.execute();

        return response.json(result)
    }
}
