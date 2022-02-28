import { Request, Response } from 'express';

import { AutheticateAdminService  } from '../services/CreateAdminAuthenticateService'


export class CreateAuthenticateAdminController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const authenticateAdminService= new AutheticateAdminService();
    const result = await authenticateAdminService.execute({
        email,
        password
    });

    return response.json(result);

  }
}
