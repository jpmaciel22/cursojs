const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escrever = require('./modules/escrever');
const ler = require('./modules/ler')
const pessoas = [
    {nome: 'Joao'}, {nome: 'Maria'}, {nome: 'Eduardo'}, {nome: 'Luiz'}
]
const json = JSON.stringify(pessoas, '', 2);
escrever(caminhoArquivo, json);

// ler(caminhoArquivo).then((resultado) => {
//     console.log(resultado.toString()); // é necessário o toString pois por padrao esse buffer do readfiles
//     // retorna em binário
// });

ler(caminhoArquivo).then((resultado) => {
    resultado = JSON.parse(resultado);
    resultado.forEach(valor => {
        console.log(valor.nome)
    });
});