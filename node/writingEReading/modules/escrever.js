const fs = require('fs').promises;
module.exports = (caminhoArquivo, dados) => {
fs.writeFile(caminhoArquivo, dados, {flag: 'w', encoding: 'utf-8'});}
// fs.writeFile(caminhoArquivo, 'skdfjdfklgfdklgjdf\n', {flag: 'a', encoding: 'utf-8'});
// a flag 'a' apenas adiciona no arquivo como um +=

// com a flag 'w' ele subscreve tudo o que já tinha escrito no arquivo antes, caso o mesmo já exista.
// fs.appendFile(caminhoArquivo, 'OiTudoBem?\n', (error) => {
//    if(error) console.log(error);
// })