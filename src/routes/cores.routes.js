import { Router } from 'express';
const router = Router();

import { getAllCores } from '../controllers/coresController.js';

router.get('/', getAllCores);

export default router
