// Some todos os numeros = Reduce
// Retorne um array com os pares = Filter
// Retorne um array com o dobro dos valores = Map
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];
const total = numeros.reduce(function(acumulador,valor,indice,array){
if (valor % 2 === 0) acumulador.push(valor * 2); // retornar o dobro dos pares 
return acumulador;
},[]) // este é o numero inicial.
console.log(total)


// Retorne a pessoa mais velha:
const pessoas = [
    {nome: 'Luiz', idade: 62}, // comeca acumulador(maior)
    {nome: 'Maria', idade: 23}, // luiz continua acumulador(maior)
    {nome: 'Eduardo', idade: 55}, // luiz continua acumulador(maior)
    {nome: 'Leticia', idade: 19}, // luiz continua acumulador(maior)
    {nome: 'Rosana', idade: 67}, // rosana vira acumulador(maior)
    {nome: 'Wallace', idade: 47}, // wallace vira acumulador(maior)
    ];

const maisVelha = pessoas.reduce((maior,valor) =>{
if(maior.idade>valor.idade)return maior;
return valor;
},0);
console.log(maisVelha);