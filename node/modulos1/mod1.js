const nome = 'Joao Pedro';
const sobrenome = 'Maciel';

const falanome = () => {
 console.log(nome,sobrenome);
}

class Pessoa{
    constructor(nome){
        this.nome = nome;
    }
}

module.exports = {
    nome, Pessoa, falanome
};

// ou 

exports.sobrenome = sobrenome;
exports.falanome = falanome;
console.log(exports);