"use strict";/**
 * Aqui temos as famozas tabelas, criada pelo sequelize.
 *
 * Aqui é feita a modelagem das tabelas que neste caso será de alunos:
 *
 * Aluno é um bicho curioso, todos nos sabemos que ele precisam:
 *  -ID:CAMPO OBRIGATÓRIO,INTEIRO
 *  -NOME:CAMPO OBRIGATÓRIO,STRING
 *  -SOBRENOME:CAMPO OBRIGATÓRIO,STRING
 *  -EMAIL:CAMPO OBRIGATÓRIO,STRING
 *  -IDADE:CAMPO OPCIONAL,INTEIRO
 *  -PESO:CAMPO OPCIONAL,FLOAT
 *  -ALTURA:CAMPO OPCIONAL,FLOAT
 */

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('alunos', {
    id: {
      type: Sequelize.INTEGER, // Precisa de ser um ID do tipo inteiro ... Não existe meio id..
      allowNull: false, // Precisa ser preenchido este campo, pra sabamos rastrealo.
      autoIncrement: true, // O ID vai ser auto incrementado, logo gerando um id automaticamente.
      primaryKey: true,
      /**
           * Chaves primárias (em inglês, Primary keys ou "PK"), sob o ponto de vista de
           * um banco de dados relacional, referem-se aos conjuntos de um ou mais campos,
           * cujos valores, considerando a combinação de valores em caso de mais de uma chave
           * primária, nunca se repetem na mesma tabela e, desta forma, podem ser usadas como
           * um índice de referência para criar relacionamentos com as demais tabela do banco
           * de dados (daí vem o nome banco de dados relacional). Portanto, uma chave primária
           * nunca pode ter valor nulo, nem repetição.
           *
           * Assim podemos referenciar o ID de um campo quando queremos deletar ele.
           */
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    sobrenome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    idade: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    peso: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    altura: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('alunos'),
};
