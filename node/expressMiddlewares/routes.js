const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

// function Middleware(req,res,next){
//     console.log()
//     console.log('Passei no middleware')
//     console.log()
//     next()
// }

route.get('/', homeController.PaginaInicial);
route.post('/', homeController.trataPost);
route.get('/contato', contatoController.PaginaInicial);
module.exports = route;