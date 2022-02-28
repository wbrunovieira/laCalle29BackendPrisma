import { Request, Response } from 'express';

import { AutheticateClientService  } from '../services/CreateUserAuthenticate'


export class CreateAuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const authenticateUserService= new AutheticateClientService();
    const result = await authenticateUserService.execute({
        email,
        password
    });

    return response.json(result);

  }
}
