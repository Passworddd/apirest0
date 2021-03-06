/**
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

import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno';
import User from '../models/User';
import Foto from '../models/Foto';

const models = [Aluno, User, Foto];

/**
 * Estamos mandando as configuração que fizemos no arquivo /config/database para
 * dentro do sequelize.
 */

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));

models.forEach((model) => model.associate && model.associate(connection.models));
