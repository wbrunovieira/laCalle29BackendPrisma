import {  Router } from 'express';

import { ensureAuthenticateAdmin } from '../middlewares/ensureAuthenticateAdmin';

const adminRoutes = Router();

import { CreateAdminController } from '../controllers/CreateAdminController';
import { FindAllUsersController } from '../controllers/FindAllUsersController';

import { CreateAuthenticateAdminController} from '../controllers/CreateAuthenticateAdminController';

const createAdminController = new CreateAdminController();
const findAllUsersController = new FindAllUsersController();

const authenticateAdminController = new CreateAuthenticateAdminController();

adminRoutes.post('/', createAdminController.handle);

adminRoutes.get('/users', ensureAuthenticateAdmin , findAllUsersController.handle);

adminRoutes.post('/authenticate', authenticateAdminController.handle);

export { adminRoutes  };
