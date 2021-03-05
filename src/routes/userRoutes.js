import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.post('/', userController.store);
router.get('/', userController.index);
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
