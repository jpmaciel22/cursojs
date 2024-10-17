const nome = 'Joao';
const obj = { nome };
const novoObj = {...obj};
console.log(novoObj)
class Pessoas{
    constructor(nome,sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome
    }
}