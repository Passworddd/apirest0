"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/**
 * Olha só.. temos aqui o elo de ligação entre o sequelize e os models..
 * Tendo em vista que o sequelize não sabe da existência dos models precisamos
 * realizar uma operação de chamar o contrutor dele entrando como paramentro as
 * configurações realizadas em src/config para connection.
 *
 * Aaaa... connection.. seu danado... Ele que faz o pulo do gato de iniciar
 * as configurações de cada elemento do models para o sequelize.
 *
 * Agora só precisa chamar este aquivo aqui no app que ele da conta de conectar
 * o sequelize aos models.
 */

var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);
var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);
var _Foto = require('../models/Foto'); var _Foto2 = _interopRequireDefault(_Foto);

const models = [_Aluno2.default, _User2.default, _Foto2.default];

/**
 * Estamos mandando as configuração que fizemos no arquivo /config/database para
 * dentro do sequelize.
 */

const connection = new (0, _sequelize2.default)(_database2.default);

models.forEach((model) => model.init(connection));

models.forEach((model) => model.associate && model.associate(connection.models));
