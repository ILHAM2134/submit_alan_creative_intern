import express from 'express';
import menuRoute from './menu-route.js';

const routes = express();

routes.use('/menu', menuRoute);

export default routes;
