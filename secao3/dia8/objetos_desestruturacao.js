const pessoa = {
nome: 'Getúlio',
sobrenome: 'Vargas',
idade: '33',
endereco:{
    rua:'Av. Arnaldo Quintela',
    numero: 70
}
};
// atribuicao via desestruturacao
const { nome } = pessoa; // neste caso funciona pois o nome da variavel é o mesmo do  
// atributo da classe pessoa
// também podemos fazer: 
const { nome: n, sobrenome} = pessoa;
console.log(n,sobrenome); // portanto podemos mudar o nome da variável
//  podemos fazer tambem
const {endereco: {rua, numero}} = pessoa;
console.log(rua); // podemos agora printar APENAS a rua.
//  para usar o rest/spread é igual ao array..
const { idade, ...resto} = pessoa;
const {...spread} = pessoa;
console.log(spread,resto);