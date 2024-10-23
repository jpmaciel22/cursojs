const fs = require('fs').promises;
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
module.exports = (caminhoArquivo) => fs.readFile(caminhoArquivo, 'utf-8')
