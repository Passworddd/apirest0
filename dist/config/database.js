"use strict";/**
 * Configuração da base de dado: Basicamente esse aquivo vai modelar o banco de dados.
 * Definindo:
        - Dialeto: Que será mariaDB.
        - Host: Link ip do servidor remoto no caso o meu está no google cloud platform
        - Port: A porta que foi altorizada a ser acessada.
        - Username: No caso vai ser o root que está no arquivo dotEnv
        - Senha: Também definido no momento da instalação do banco de dados no servidor
          e está no arquivo dotEnv local.
        - TimeZone: Eu coloquei São Paulo, mas pode ser qualquer um, seja feliz ^^.
 */

require('dotenv').config(); // Solicita os campo do arquivo .env do dotenv

module.exports = {
  dialect: 'mariadb',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  define: {
  // Vai ser criado um registro de quando o campo foi criado e quando foi atualizado.
    timestamps: true,
    underscored: true, // -> Se eu tenho um campo: nomeAluno -> retorna -> nome_aluno
    underscoredAll: true, // -> Ele faz isso em tudo
    createdAt: 'created_at', // -> Reparando bug onde as coisas acima não funciona
    updatedAt: 'updated_at', // -> Reparando bug onde as coisas acima não funciona
  },
  dialectOptions: {
    timezone: 'America/Sao_Paulo',
  },
  timezone: 'America/Sao_Paulo',
};
