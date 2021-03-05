/**
 * Tendo um controller de token posso criar uma rota para gera esses tokens;
 *
 * O usuário posta pra rota do token o email e senha, havera uma checagem e se
 * forem válidos os dados deles, é criado um token e entrega pra ele de volta.
 *
 * Dentro da class TokenController queremos receber:
 *
 * -Email
 * -Password
 *
 */

import jwt from 'jsonwebtoken';
import User from '../models/User';

class TokenController {
  async store(req, res) {
    const { email = '', password = '' } = req.body; // Recebendo os dados do body da página.

    if (!email || !password) {
      return res.status(401).json({
        errors: ['Email ou senha invalido'],
      });
    }

    const user = await User.findOne({ where: { email } });
    // Checando se usuário com este email;

    if (!user) {
      return res.status(401).json({
        errors: ['Usuário não existe'],
      });
    }

    if (!(await user.passwordIsValid(password))) { // Se a senha do usuário não for valida.
      return res.status(401).json({
        errors: ['Senha invalida'],
      });
    }

    const { id } = user;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json({ token });
  }
}

export default new TokenController();
