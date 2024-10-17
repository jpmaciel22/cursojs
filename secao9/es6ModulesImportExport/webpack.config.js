const path = require('path'); //CommonJS

module.exports = {
mode: 'production',
entry: './src/index.js',
output: {
    path: path.resolve(__dirname, 'public', 'assets', 'js'),
    filename: 'bundle.js'}, // isso facilita de qualquer sistema abrir a pasta
//ja q a funcao resolve literalmente resolve como será a barra independente do sistema
// portanto colocamos __dirname para dizer q a primeira pasta do caminho é o nome da pasta deste arquivo
// e depois as outras pastas do caminho para o arquivo
module: {
    rules: [{
     exclude: /node_modules/, // excluir esta pasta pois ela tem muitos arquivos
     test: /\.js$/,  //testar se a extensao do arquivo termina em .js
     use: {
        loader: 'babel-loader',
        options: {
            presets:['@babel/env']
        }
     }
    }]
    },
devtool: 'source-map'
}; // tudo que esta dentro de um arquivo do node é visto como um module
// portanto igual uma funcao ele tem o proprio escopo. todas as variaveis dentro do module.exports serao
// exportadas. 