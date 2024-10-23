const fs = require('fs').promises;
const path = require('path');
const caminhoArquivo = path.resolve(__dirname, '..', 'teste.txt')

// fs.readFile(caminhoArquivo, 'utf-8', (error, data) => {
//     if (error) {
//         if (error.code === "ENOENT") {
//             console.error("File not found:", err.path);
//         } else {
//             console.error("Error reading file:", err);
//         }
//         return;}
//     console.log(data);
// });


 // o caso acima seria sem promises

const li = fs.readFile(caminhoArquivo)
.then((resultado) => {
    console.log(resultado.toString()); // é necessário o toString pois por padrao esse buffer do readfiles
    // retorna em binário
})