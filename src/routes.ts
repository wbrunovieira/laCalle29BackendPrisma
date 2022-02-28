import { Router } from 'express';

import { CreateUserController } from './controllers/CreateUserController';
import { CreateAdminController } from './controllers/CreateAdminController';
import { CreateAuthenticateUserController } from './controllers/CreateAuthenticateUserController';
import { CreateAuthenticateAdminController} from './controllers/CreateAuthenticateAdminController'

export const routes = Router();

const createUserController = new CreateUserController();
const createAdminController = new CreateAdminController();
const authenticateUserController = new CreateAuthenticateUserController();
const authenticateAdminController = new CreateAuthenticateAdminController();

routes.post('/user', createUserController.handle);
routes.post('/admin', createAdminController.handle);

routes.post('/user/authenticate', authenticateUserController.handle);
routes.post('/admin/authenticate', authenticateAdminController.handle)

