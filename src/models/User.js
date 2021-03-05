import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING, // Nome é do tipo string
        defaultValue: '', // Caso não for dado um nome quero que ele esteja vaziu.
        validate: { // Realiza uma checagem e retorna uma menssagem
          len: { // Tipo da checage -> No caso atual tamanho da string
            args: [3, 255], // Tamanho da string -> Precisa ter entre 3 e 255 caracter
            msg: 'Campo nome precisa ter entre 3 e 255 caracteres',
          },
        },
      },
      email: {
        type: Sequelize.STRING, // Nome é do tipo string
        defaultValue: '', // Caso não for dado um nome quero que ele esteja vaziu.
        unique: {
          msg: 'Email já foi cadastrado',
        },
        validate: { // Realiza uma checagem e retorna uma menssagem
          isEmail: {
            msg: 'O email não é válido. ',
          },
        },
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL, // Nome é do tipo string
        defaultValue: '', // Caso não for dado um nome quero que ele esteja vaziu.
        validate: { // Realiza uma checagem e retorna uma menssagem
          len: { // Tipo da checage -> No caso atual tamanho da string
            args: [3, 50],
            msg: 'A senha não é valida, precisa ter entre 6 e 50 caracter.',
          },
        },
      },
    }, {
      sequelize,
    });

    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcryptjs.hash(user.password, 8);
      }
      /*
        Salve o hash da senha no banco de dados e retorna o Hash para o campo password_hash
       */
    });
  }

  passwordIsValid(password) {
    return bcryptjs.compare(password, this.password_hash);
    /**
     * Retorno uma promiss do resutado da comparação para autenticação da senha
     * utilizado no token controller
     */
  }
}
