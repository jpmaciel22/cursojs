function funcao(x,y){

    if(x%2!=0) return Math.pow(y,2);
    return x;

}
// x e y foram parametros da funcao
console.log(funcao(3,5));

// o java script tem uma propriedade na funcao declarada com 'function' de guardar quaisquer
// argumentos passados em uma variavel chamada 'arguments', e nao da erro.

function testeArguments(){
    let somaTotal = 0;
    console.log(arguments);
    for(let i of arguments){
        somaTotal += i;
    }
    console.log(somaTotal);
}
testeArguments(1,2,3,4,5); // perceba que a funcao nao pede parametros porem usá-los
// nao causa problemas.
//  ainda assim caso houvessem mais parametros do que argumentos, os parametros que nao tiverem sido
//  passados valor ( inseridos argumentos ) terão o valor undefined.

// para colocar valor de parametros padrao:
function funcaoPadraoSemValor(a,b = 2 , c = 4){
    console.log(a+b+c);
}
funcaoPadraoSemValor(2,undefined,6) // nota-se que apenas foi inserido o valor de a,
//  portanto b por default vale 2 ( além de termos pulado a insercao do seu valor inserindo default)
// e c foi inserido o valor de 6.

// funcoes com desestruturalizacao
function funcaoDesestruturalizacao({nome,sobrenome,idade}){
    console.log(nome,sobrenome,idade);
}
let objeto = {nome: 'Jesus', sobrenome: 'Cristo', idade: '33'} // tambem poderiamos inserir direto estes
// valores dentro da funcao abaixo, sem usar variavel para isto.
funcaoDesestruturalizacao(objeto);

function funcaoArray([valor1,valor2,valor3]){
    console.log(valor1,valor2,valor3);
}
const arrayzudo = [171,757,2001,911,'oitudobem']
funcaoArray(arrayzudo)

function conta(operacao,acumulador,...numeros){

    for(let i of numeros){
        if(operacao === '+') acumulador += i;
        if(operacao === '-') acumulador -= i;
        if(operacao === '*') acumulador *= i;
        if(operacao === '/') acumulador /= i;

    }
console.log(acumulador)
}
conta('+',0,20,30,50,40,60,80);