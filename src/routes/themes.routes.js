import { Router } from 'express';
const router = Router();

import { getAllThemes } from '../controllers/themesController.js';

router.get('/', getAllThemes);

export default router
