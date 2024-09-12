function criaMultiplicador(multiplicador){
//multiplicador esta neste escopo
    return function(n){
    return n * multiplicador;
}
}
duplicar = criaMultiplicador(2);  // salvamos no valor de duplicar a funcao anonima que recebe n
calculo = duplicar(10); // como visto em declaracao de funcoes isso seria como se o duplicar recebesse
// diretamente uma funcao, podendo assim ser executado
// salvamos no valor de calculo o retorno da funcao anonima , que por sua vez é um numero.
triplicar = criaMultiplicador(3);
quadriplica = criaMultiplicador(4);
console.log(calculo); // 20
console.log(quadriplica(2)) // assim podemos poupar o tempo de declarar a variavel 'calculo'
//  printando diretamente o valor

//  apesar de ter aprendido desta forma acredito que seja mais facil o abaixo:
function Multiplicador(n,multiplicador){
    return n * multiplicador
}
console.log(Multiplicador(2,5)) // >> 10, funciona da mesma forma e é mais rapido.
