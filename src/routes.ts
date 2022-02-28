import { Router } from 'express';

import { CreateUserController } from './controllers/CreateUserController';
import { CreateAdminController } from './controllers/CreateAdminController';
import { CreateAuthenticateUserController } from './controllers/CreateAuthenticateUserController';

export const routes = Router();

const createUserController = new CreateUserController();
const createAdminController = new CreateAdminController();
const authenticateUserController = new CreateAuthenticateUserController();
routes.post('/user', createUserController.handle);
routes.post('/admin', createAdminController.handle);

routes.post('/user/authenticate', authenticateUserController.handle);


