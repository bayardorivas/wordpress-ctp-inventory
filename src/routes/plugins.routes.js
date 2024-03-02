import { Router } from 'express';
const router = Router();

import { getAllPlugins } from '../controllers/pluginsController.js';

router.get('/', getAllPlugins);

export default router
