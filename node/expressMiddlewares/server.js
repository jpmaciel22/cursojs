const express = require('express');
const app = express();
const routes = require('./routes')
const path = require('path');
const { MiddlewareGlobal } = require('./src/middlewares/middleware')

app.use(express.urlencoded({extended: true})); // para poder transformar em objeto as requisicoes do body
app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

//nossos proprios middlewares
app.use(MiddlewareGlobal);
app.use(routes);

app.listen(3000, () => {
    console.log('Servidor executando na porta 3000')
})