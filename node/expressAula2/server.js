const express = require('express');
const app = express();

app.get('/', (requisicao, resposta) => {
  resposta.send(`<form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    </form>`)
});

app.post('/', (requisicao,resposta) => {
    resposta.send('Recebi o formulário.')
})

app.listen(3000, () => {
    console.log('Servidor executando na porta 3000')
})