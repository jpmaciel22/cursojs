// AULA 26 - MAIS SOBRE NUMBERS

let num1 = 1500 // é um number mesmo que seja um int
let num2 = 15.00// é um number mesmo que seja um float
let float = 3.1415926535
console.log(num1.toString() + num2); // acaba concatenando  o texto.
console.log(num1.toString(2)); // converte o numero para binario
console.log(float.toFixed(2)); // limita a amostragem de casas decimais para 2.
console.log(Number.isInteger(num1)); // verifica de forma booleana se é inteiro ou não.
console.log(num1 * 'ola'); // retorna NaN, e para verificar isso usa-se Number.isNaN();

float = parseFloat(float.toFixed(2)); // salva o valor de float com as casas corrigidas.
// o mesmo pode ser feito também como:
float = Number(float.toFixed(2));
float = Math.trunc(float) // transforma o numero em inteiro apagando as partes float.

// AULA 27 - OBJETO MATH


float = Math.floor(float); // arredonda para baixo o valor do número.
//console.log(' Valor arredondado de pi: ',float);
float = Math.ceil(float); // arredonda para cima o valor do número.
//console.log(' Valor arredondado de pi: ',float);
float = Math.round(float); // arredonda para o mais próximo.
random = Math.random(); // retorna um valor aleatório entre 0 e 1.
//console.log(random);

// se quisermos um número aleatório entre 10 e 5 por exemplo faremos o seguinte:
random = Math.random() * (10-5) + 5;
// console.log(random);

// o mesmo entre 100 e 20:
random = Math.round(Math.random() * (100-20) + 20); //nota-se que o arredondamento ja foi feito.
// console.log(random);

// potenciação pode ser escrita como: console.log(Math.pow(2,10));
//  ou console.log(2**10);

// a raiz quadrada como é a divisão de potencias seria: console.log(9 ** (1/2)); resultado: 3
//  também pode ser feita deste jeito: console.log(Math.sqrt(9)); resultado: 3

console.log(Math.min(1,2,3,4,5,6,7,8,9,10)) // retorna o menor valor.
console.log(Math.max(1,2,3,4,5,6,7,8,9,10)) // retorna o maior valor.

// Math.min não funciona em arrays de mais de um número por conta das propriedades da conversão
// de strings e números. 

// explicacao abaixo
    /**Math.min uses ToNumber to convert its arguments.
    ToNumber uses ToPrimitive to convert Objects (and Arrays are Objects).
    ToPrimitive uses toString
    [5].toString() is '5', which gets returned to ToPrimitive, 
    which returns it to ToNumber, which parses it to 5 and returns it to Math.min,
     for which it is a valid argument, because it is not NaN.
    [1, 2].toString(), OTOH, is '1, 2', which gets returned to ToPrimitive, which returns it to ToNumber
     which parses it to NaN, because it is not a valid number representation. 
     ToNumber then passes NaN to Math.min, which will then return NaN
     , because (as MDN states it) "one of its arguments cannot be converted to a number" or 
     (as the spec states it) "If any value is NaN, the result is NaN.". **/

// a condição (!!) verifica booleanamente uma equação.