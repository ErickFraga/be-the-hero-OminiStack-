const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete)

module.exports = routes;



/**
 * Rota
 * Recurso
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar/Listar uma informação do bakc-end.
  * POST: Criar uma informação no back-end.
  * PUT: Alterar uma informação no back-end.
  * DELETE: Deletar uma informação no back-end.
  */

  /**
   * Tipos de parâmetro:
   * 
   * Querry Params: Parâmetros nomeados e enviados na rota após "?" (filtros, paginação).
   * Route Params: Parâmetros utilizados para localizar recursos.
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos.
   */

   /**
    * Bancos de dados:
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB, etc
    */

    /**
     * Instalando SQLite
     * Driver: SELECT * FROM users
     * Query Builder: table('users').select('*').where()
     */
