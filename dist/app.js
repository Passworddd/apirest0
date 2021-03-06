"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _path = require('path');

_dotenv2.default.config();

require('./database'); // Chamando o index da database para ele ser executado.

var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _homeRoutes = require('./routes/homeRoutes'); var _homeRoutes2 = _interopRequireDefault(_homeRoutes);
var _userRoutes = require('./routes/userRoutes'); var _userRoutes2 = _interopRequireDefault(_userRoutes);
var _tokenRoutes = require('./routes/tokenRoutes'); var _tokenRoutes2 = _interopRequireDefault(_tokenRoutes);
var _alunoRoutes = require('./routes/alunoRoutes'); var _alunoRoutes2 = _interopRequireDefault(_alunoRoutes);
var _fotoRoutes = require('./routes/fotoRoutes'); var _fotoRoutes2 = _interopRequireDefault(_fotoRoutes);

_dotenv2.default.config();

class App {
  constructor() {
    this.app = _express2.default.call(void 0, );
    this.middlewares();
    this.routes();
  }

  middlewares() {
  /*
    O que significa: express.urlencoded({ extended: true }) ?

    A opção "extended" diz para o express qual
    biblioteca ele deve utilizar para fazer o
    parsing do conteúdo das requisições que ele recebe.
    Quando extended : true vai utilizar a biblioteca qs
    e quando for false ele vai utilizar a biblioteca querystring.

    O que significa: this.app.use(express.json());

    Configuração para app.user também entender json
  */

    this.app.use('/images/', _express2.default.static(_path.resolve.call(void 0, __dirname, '..', 'uploads', 'images')));

    this.app.use(_express2.default.static(_path.resolve.call(void 0, __dirname, 'uploads')));
    this.app.use(_express2.default.urlencoded({ extended: true }));
    this.app.use(_express2.default.json());
  }

  routes() {
    this.app.use('/', _homeRoutes2.default);
    this.app.use('/users/', _userRoutes2.default);
    this.app.use('/tokens', _tokenRoutes2.default);
    this.app.use('/alunos/', _alunoRoutes2.default);
    this.app.use('/fotos/', _fotoRoutes2.default);
  }
}

exports. default = new App().app;
/*
  Exportando apenas o app dentro da classa App, sendo ele o express que precisamos.
*/
