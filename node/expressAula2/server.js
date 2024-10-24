const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true})); // para poder transformar em objeto as requisicoes do body

app.get('/', (requisicao, resposta) => {
  resposta.send(`<form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    </form>`)
});

app.get('/testes/:profile?', (req,res) => { // quando colocamos ? é pq o parametro é opcional
    // e colocamos /: para dizer q o conteudo dessa barra será o parametro de testes
    // no caso o parametro do perfil da pagina testes exemplo: localhost:3000/testes/ocelot
    //para acessar o usuário ocelot
    console.log(req.params);
    res.send(req.params.profile)
    console.log(req.query)
})

app.post('/', (requisicao,resposta) => {
    console.log(requisicao.body)
    resposta.send(`O nome que foi enviado foi: ${req.body.nome}`);
})

app.listen(3000, () => {
    console.log('Servidor executando na porta 3000')
})