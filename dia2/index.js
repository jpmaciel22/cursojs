alert('Mensagem 1');
// window.confirm(''); é booleano, retorna o valor true ou falso sobre a decisao do usuário
// window.prompt(''); abre um prompt de texto para o usuário e retorna o texto digitado pelo usuário
// um alerta retorna ''undefined'' já que o mesmo não aponta para nada na memória.

/*
 * ao digitar let num1 = prompt('Digite um numero'); é retornado undefined, porém ao chamar a variavel num1 
 * mostrará o valor digitado pelo usuário no prompt, já que o mesmo foi guardado na num1.
 * um problema ocorrerá já que o valor será guardado do número em string.
 * portanto ao tentar somar este número o mesmo irá concatenar.
 * utilizaremos o parseInt() para alterar a tipagem desta variável.
 */

let num1 = prompt('Digite o primeiro número');
let num2 = prompt('Digite o segundo número');
num1 = parseInt(num1);
num2 = parseInt(num2);
let num3 = (num1 + num2);
window.alert(`O resultado foi: ${num3}`);



// Exercicio 2 

let varA='A'; //B
let varB='B'; //C
let varC='C'; //A
const temp=varA;

varA=varB;
varB=varC;
varC=temp;

console.log(varA, varB, varC);  
