import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(400).json({
      errors: ['Precisa fazer login'],
    });
  }

  const [, token] = authorization.split(' '); // Preciso separa o texto Bearer do começo do Token.

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;
    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (err) {
    return res.status(400).json({
      errors: ['Token expirado ou invalido'],
    });
  }
};
