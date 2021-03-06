"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

 class User extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: _sequelize2.default.STRING, // Nome é do tipo string
        defaultValue: '', // Caso não for dado um nome quero que ele esteja vaziu.
        validate: { // Realiza uma checagem e retorna uma menssagem
          len: { // Tipo da checage -> No caso atual tamanho da string
            args: [3, 255], // Tamanho da string -> Precisa ter entre 3 e 255 caracter
            msg: 'Campo nome precisa ter entre 3 e 255 caracteres',
          },
        },
      },
      email: {
        type: _sequelize2.default.STRING, // Nome é do tipo string
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
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      password: {
        type: _sequelize2.default.VIRTUAL, // Nome é do tipo string
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
        user.password_hash = await _bcryptjs2.default.hash(user.password, 8);
      }
      /*
        Salve o hash da senha no banco de dados e retorna o Hash para o campo password_hash
       */
    });
  }

  passwordIsValid(password) {
    return _bcryptjs2.default.compare(password, this.password_hash);
    /**
     * Retorno uma promiss do resutado da comparação para autenticação da senha
     * utilizado no token controller
     */
  }
} exports.default = User;
