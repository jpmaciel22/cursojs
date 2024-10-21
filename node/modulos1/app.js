const path = require('path')
const axios = require('axios')
const mod1 = require('./mod1'); // msm coisa q o import
// ou
const { nome, sobrenome, falanome } = require('./mod1');

console.log(mod1.nome);
mod1.falanome();
falanome();
const nomeMeu = new mod1.Pessoa('JoaoZao');
console.log(nomeMeu)

axios('https://postoldweb.neocities.org/')
.then(response => console.log(response.data))
.catch(erro => console.log(erro));