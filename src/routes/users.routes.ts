import {  Router } from 'express';

const usersRoutes = Router();

import { CreateUserController } from '../../src/controllers/CreateUserController';
import { CreateAuthenticateUserController } from '../controllers/CreateAuthenticateUserController';

const createUserController = new CreateUserController();
const authenticateUserController = new CreateAuthenticateUserController();

usersRoutes.post('/', createUserController.handle);
usersRoutes.post('/authenticate', authenticateUserController.handle);

export { usersRoutes  };
