import express from 'express';
import {
  addMenu,
  editMenuById,
  getAllmenu,
  removeMenuById,
} from '../controller/menu-controller.js';

const menuRoute = express();

menuRoute.get('/', getAllmenu);
menuRoute.post('/', addMenu);
menuRoute.patch('/:id', editMenuById);
menuRoute.delete('/:id', removeMenuById);

export default menuRoute;
