import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', loginRequired, userController.index);
router.get('/:id', userController.show);

router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

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
