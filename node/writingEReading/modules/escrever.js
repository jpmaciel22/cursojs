const fs = require('fs').promises;
const path = require('path');
const caminhoArquivo = path.resolve(__dirname, '..', 'teste.txt')

fs.writeFile(caminhoArquivo, 'skdfjdfklgfdklgjdf\n', {flag: 'a', encoding: 'utf-8'});