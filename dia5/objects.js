// AULA 32 - OBJETOS
const pessoa1 = {
nome: 'Joao',
idade: 19,
linguagem: 'js',
carrosFavoritos: ['V40','320i','e46'], 
};

console.log(pessoa1.idade);
console.log(pessoa1.carrosFavoritos);

function criarPessoa(nome,idade,linguagem,carrosFavoritos){
return{
nome: nome,
idade: idade,
linguagem: linguagem,
carros: carrosFavoritos,
      }
                                                           }

const pessoa2 = criarPessoa('Maria',50,'Java',['HB20','TUCSON']);
console.log(pessoa2);