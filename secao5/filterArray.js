// A funcao filter faz um for no array de elementos, e utiliza uma funcao callback que retorna
// valores booleanos, é NECESSARIO utilizar como parametros os valores, indices e array NESTA ORDEM.
//  é uma funcao simples que apenas necessita de uma condicao e true  e false.
//  O filter entao apos usar essa funcao callback retorna um array com os elementos filtrados.

//Retorne os numeros maiores do que 10:
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];
const numerosFiltrados = numeros.filter((valor,indice,array) => valor>10?true:false);
console.log(numerosFiltrados);

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com A.
const pessoas = [
{nome: 'Luiz', idade: 62},
{nome: 'Maria', idade: 23},
{nome: 'Eduardo', idade: 55},
{nome: 'Leticia', idade: 19},
{nome: 'Rosana', idade: 32},
{nome: 'Wallace', idade: 47},
];
const [{nome, idade}] = pessoas;
const PessoasMaior5Letras = pessoas.filter(valor => valor.nome.length>5?true:false);
console.log(PessoasMaior5Letras);
const PessoasIdosas = pessoas.filter(valor => valor.idade>50?true:false);
console.log(PessoasIdosas);
const PessoasTerminaComA = pessoas.filter(valor => valor.nome.includes('a',valor.nome.length-1)?true:false);
// esta funcao acima poderia ter como condicao tambem:
// valor.nome.toLowerCase().endsWith('a');
console.log(PessoasTerminaComA);


// let maiores = [];
// for(let i of numeros){
//     let contador = 0;
//     if(i>10){
//         contador++; 
//         maiores.push(i)
//     }
// }
// console.log(maiores);