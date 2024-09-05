let a = 'A';
let b = 'B';
let c = 'C';

const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const [primeiro,segundo,terceiro, ...resto] = numeros;
console.log(primeiro,segundo,terceiro , resto); // >> 1 2 3 
// o que mostra que atribuimos o valor dos numeros do indice respectivo nas variaveis
const [...spread] = numeros;
console.log(spread); // todo o array espalhado.
// também é possivel pular casas do array como em:
const [ , , ,quarto, ,sexto, ,oitavo] = numeros;
console.log(quarto,sexto,oitavo); // >> 4 6 8

const numeros2 = [[1,2,3],
                  [4,5,6],
                  [7,8,9]]
/*para imprimir o 8 seria: */ console.log(numeros2[2][1]); // >>  8 
/*ou pode ser feito também da forma:  */ const [,,[,oito]] = numeros2;
console.log(oito); // oito