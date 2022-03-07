import { Router } from 'express';
import { usersRoutes } from './users.routes';
import { adminRoutes } from './admin.routes';


const routes = Router();

routes.use('/user', usersRoutes);
routes.use('/admin', adminRoutes);

export default routes;
