const express = require('express');
const app = express();

// CRUD = CREATE, READ, UPDATE, DELETE
//        POST    GET   PUT     DELETE

// https://postoldweb.neocites.org/ <- GET -> Entregue a página.
app.get('/', (requisicao, resposta) => {
  resposta.send(`<form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    </form>`)
});

app.post('/', (requisicao,resposta) => {
    resposta.send('Recebi o formulário.')
})

app.get('/contato',(requisicao, resposta) => {
    resposta.send('Obrigado por entrar em contato')
})


app.listen(3000, () => {
    console.log('Servidor executando na porta 3000')
})