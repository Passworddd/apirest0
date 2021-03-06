/**
 *  Chegamos então no models.. nem parece que foi a 20 minutos estavamos sem nada.. que lindo...
 * Dentro da estrutura MVC, claro que sem o V da coisa porque estmos desenvolvendo uma API,
 * Sempre que você pensar em manipulação de dados, pense em model. Ele é responsável pela
 * leitura e escrita de dados, e também de suas validações.
 *
 * Então vamos fazer aqui:
 *  - VALIDAÇÕES:
 *  - ESTRUTURA:
 *
 * Mas como assim? Já existe uma modelagem na migration ...
 *
 * Então, lá na migration o sequelize realizou a a criação das tabelas em banco de dados
 * aqui estamos criando os modelos fora desse banco para que express entenda de vezes o tipo
 * de dados que estamos lidando e assim fazendo o controle, validações e estrita dos campo.
 *
 * Então em resumo fizemos:
 *  - Criação do Server -> Rotas -> HomeController
 *  - Configuramos o Sequelize -> Criou a Migration -> Exportamos o Formato da Tabela para BD ->
 *    -> Aqui estamos madelagem fora do DB para que o express entenda o que queremos pedir quando
 *       for solicitado.
 */

import Sequelize, { Model } from 'sequelize'; // Importa o Model que está dentro do Sequelize...

export default class Aluno extends Model { // Estou exportando Aluno e seu Model dentro do sequeliz
  static init(sequelize) { // Criar um metodo statico init
    super.init({ // Chamar o init do pai (no caso do model)
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: ['Nome precisa ter mais de 3 caracter.'],
          },
        },
      },
      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: ['Sobrenome Precia ter mais de 3 caracter'],
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: true,
        validate: {
          isEmail: {
            msg: ['Email não é valido.'],
          },
        },
      },
      idade: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: ['Idade precisa ser inteiro'],
          },
        },
      },
      peso: {
        type: Sequelize.FLOAT,
        defaultValue: '',
      },
      altura: {
        type: Sequelize.FLOAT,
        defaultValue: '',
      },
    }, {
      sequelize,
    });
    return this;
  }
}
