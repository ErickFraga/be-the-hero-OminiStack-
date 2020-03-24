const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Entidades:
 * 
 * ONG
 * Caso(incident)
 */

 /**
  * Funcionalidades da ONG:
  * 
  * Login de ONG
  * Logout de ONG
  * Cadastro de ONG
  * Cadastrar Casos
  * Deletar Casos
  * Listar Casos especificos de um ONG
  * Listar todos os casos
  * Entrar em contato com a ONG (email whattsapp)
  */