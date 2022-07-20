import { Router } from 'express';
import TeamsRoutes from './api/teams/team.routes';

const routes = Router();

routes.use('/teams', TeamsRoutes);

export default routes;