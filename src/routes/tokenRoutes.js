import { Router } from 'express';
import tokenController from '../controllers/tokenController';

const router = new Router();

router.post('/', tokenController.store); // Vou criar uma nova sessão/token

export default router;
