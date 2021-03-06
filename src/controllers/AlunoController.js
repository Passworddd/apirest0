import Aluno from '../models/Aluno';

class AlunoController {
  async index(req, res) {
    const aluno = await Aluno.findAll({ attributes: ['id', 'nome', 'email'] });
    res.json(aluno);
  }

  async store(req, res) {
    try {
      const alunoNovo = await Aluno.create(req.body);
      return res.json(alunoNovo);
    } catch (e) {
      return res.json({
        errors: ['Não deu'],
      });
    }
  }
}

export default new AlunoController();
