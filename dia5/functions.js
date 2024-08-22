// AULA 31 FUNCTIONS - BÁSICO

function saudacao(nome){
return console.log(`Olá ${nome}`)

}

function quadrado(x,y){
   const resultado = x**(y);
    return resultado;
    //return console.log(x ** (y));  esta é outra forma de fazer o mesmo do que acima, 
    // porém se comparar pensando em ponteiros este resultado apenas faria a conta e printaria
    // e nao salvaria direto no conteudo da memoria da variavel, apenas rodaria a funcao
    // o valor de resultado da parte abaixo seria undefined ao dar ''console.log(resultado);''
}

nome = 'Joao';
saudacao(nome);
quadrado(2,10);
//ou:
const resultado = quadrado(4,4);
console.log(resultado);


// como fazer arrow functions: 

const quadradoArrow = (x,y) => x**(y);

console.log(quadradoArrow(9,3));

//os valores enviados (9,3) são argumentos, já (x,y) criados na função são parametros
// argumentos sao enviados por meio de parametros.


