import { Router } from 'express';

import { CreateUserController } from './controllers/CreateUserController'
import { CreateAdminController } from './controllers/CreateAdminController'

export const routes = Router();

const createUserController = new CreateUserController();
const createAdminController = new CreateAdminController();

routes.post('/user', createUserController.handle);
routes.post('/admin', createAdminController.handle);


