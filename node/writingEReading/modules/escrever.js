const fs = require('fs').promises;
const path = require('path');
const caminhoArquivo = path.resolve(__dirname, '..', 'teste.txt')

fs.writeFile(caminhoArquivo, 'skdfjdfklgfdklgjdf\n', {flag: 'a', encoding: 'utf-8'});
// fs.writeFile(caminhoArquivo, 'skdfjdfklgfdklgjdf\n', {flag: 'w', encoding: 'utf-8'});

// com a flag 'w' ele subscreve tudo o que já tinha escrito no arquivo antes, caso o mesmo já exista.