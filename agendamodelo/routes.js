const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');

// Rotas da home
route.get('/', homeController.index);
//Rotas de login
route.get('/login/', loginController.index)
route.get('/login/register', loginController.register)
// route.get('/login/login', loginController.login)



module.exports = route;
