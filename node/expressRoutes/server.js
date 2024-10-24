const express = require('express');
const app = express();
const routes = require('./routes')
app.use(express.urlencoded({extended: true})); // para poder transformar em objeto as requisicoes do body
app.use(routes);

app.listen(3000, () => {
    console.log('Servidor executando na porta 3000')
})