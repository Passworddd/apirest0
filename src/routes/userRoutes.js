import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', userController.store);
router.get('/', loginRequired, userController.index);
router.delete('/:id', userController.delete);
router.get('/:id', userController.show);
router.put('/:id', userController.update);

export default router;

/**
 *
 * Index -> Lista todos os usuário -> Get
 * Store/Create -> Cria usuário -> POST
 * Delete -> Deleta usuário -> DELETE
 * Show -> Mostra um usuário
 * Update -> Atualiza um -> GET
 *
 */
