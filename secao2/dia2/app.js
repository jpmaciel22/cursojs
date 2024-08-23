// dados primitivos

const nome1 = 'Joao'; // const nao pode ser mudado, apenas por meio de funções
const num1 = 10; // int é visto como number
const num2 = 10.52 // float é visto como number também.
let nomeTeste; // neste momento esta variável esta como undefined, já que seu valor ainda não foi definido
// porém a mesma ja está declarada, ou seja apenas nao foi inicializada.
const SobrenomeTeste = null; // este valor foi propositalmente declarado como nulo, a mesma é 
// vista de forma diferente de undefined.
const boolean = 0; // apenas tem como possibilidade de valor 0 ou 1 ou true ou false.
// ** faz potenciação, nao é necessário o math.pow

console.log(typeof nome1, nome1); // a funcao typeof permite printar a tipagem da variavel.
console.log(num1 ** num2);

// exemplo de pré e pós incrementação

// pós abaixo

let contador = 1;
console.log(contador++);
console.log(contador);

// apenas se torna 2 após a segunda print, já que o incremento ja foi feito, porem a acao da primeira print é anterior a isto.

// pré abaixo
contador = 1;
console.log(++contador);
console.log(contador);

//nota-se que já na primeira print o numero ja esta alterado para 2.

// parseInt(); é utilizado para converter o valor para um inteiro. exemplo abaixo
// Number(); é utilizado para converter para um número, tipagem number
// ParseFloat(); é utilizado para converter para um ponto flutuante.
const num40 = 10;
const num50 = parseInt('5');
console.log(num40 + num50);
console.log(typeof num50);
