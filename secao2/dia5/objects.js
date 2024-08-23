// AULA 32 - OBJETOS
const pessoa1 = {
nome: 'Joao',
idade: 19,
linguagem: 'js',
carrosFavoritos: ['V40','320i','e46'], 
fala(){
console.log(`${this.nome} está dizendo olá.`);
}
}; // é possível declarar funções dentro do objeto sem precisar digitar function antes

console.log(pessoa1.idade);
console.log(pessoa1.carrosFavoritos);

function criarPessoa(nome,idade,linguagem,carrosFavoritos){
return{
nome: nome,
idade: idade,
linguagem: linguagem,
carros: carrosFavoritos,                  //se quiser é possivel declarar como :
// return{nome,idade,lingaugem,carrosFavoritos}
      }
                                                           }

const pessoa2 = criarPessoa('Maria',50,'Java',['HB20','TUCSON']);
console.log(pessoa2);
pessoa1.fala();