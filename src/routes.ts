import { Router } from 'express';

import { CreateUserController } from './controllers/CreateUserController';
import { CreateAdminController } from './controllers/CreateAdminController';
import { CreateAuthenticateUserController } from './controllers/CreateAuthenticateUserController';
import { CreateAuthenticateAdminController} from './controllers/CreateAuthenticateAdminController';

import { ensureAuthenticateUse} from './middlewares/ensureAuthenticateUser';

import { FindAllUsersController } from './controllers/FindAllUsersController'
import { ensureAuthenticateAdmin } from './middlewares/ensureAuthenticateAdmin';

export const routes = Router();

const createUserController = new CreateUserController();
const createAdminController = new CreateAdminController();
const authenticateUserController = new CreateAuthenticateUserController();
const authenticateAdminController = new CreateAuthenticateAdminController();
const findAllUsersController = new FindAllUsersController();

routes.post('/user', createUserController.handle);
routes.post('/admin', createAdminController.handle);
routes.get('/admin/users', ensureAuthenticateAdmin , findAllUsersController.handle)

routes.post('/user/authenticate', authenticateUserController.handle);
routes.post('/admin/authenticate', authenticateAdminController.handle)


