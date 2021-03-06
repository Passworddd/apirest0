import dotenv from 'dotenv';

dotenv.config();

import './src/database'; // Chamando o index da database para ele ser executado.

import express from 'express';
import homeRoutes from './src/routes/homeRoutes';
import userRoutes from './src/routes/userRoutes';
import tokenRoutes from './src/routes/tokenRoutes';
import alunoRoutes from './src/routes/alunoRoutes ';
import fotoRoutes from './src/routes/fotoRoutes';

dotenv.config();

class App {
  constructor() {
    this.app = express();
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

    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/aluno/', alunoRoutes);
    this.app.use('/fotos/', fotoRoutes);
  }
}

export default new App().app;
/*
  Exportando apenas o app dentro da classa App, sendo ele o express que precisamos.
*/
