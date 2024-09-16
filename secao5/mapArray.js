// Dobre os numeros:
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];
const numerosDobrados = numeros.map((valor,indice,array) => valor*2);
console.log(numerosDobrados);

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa.
// Remova apenas a chave nome do objeto.
// Adicione uma chave ID em cada objeto.

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
    ];

const NomeDasPessoas = pessoas.map(valor => `${valor.nome}`);
console.log(NomeDasPessoas);
const IdadeDasPessoas = pessoas.map(valor => ({idade: valor.idade }));
console.log(IdadeDasPessoas);
const IDPessoas = pessoas.map((valor,index) => ({ID: index}));
console.log(IDPessoas);