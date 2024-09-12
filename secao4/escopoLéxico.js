const nome = 'joao';
function falaNomeGlobal(){
    console.log(nome);
}
falaNomeGlobal(); // executara joao pois a variavel nome está no escopo global, ou seja a funcao enxerga
//  variaveis que estao fora da mesma mas o resto do codigo nao enxerga variaveis dentro desta funcao.
function falaNomeFunction(){
let nome = 'Jesus';
console.log(nome);    
}
// portanto neste caso o resultado será 'Jesus', e nao joao, pois a funcao agora enxerga antes 'Jesus'.
function usaFalaNomeFunction(){
    // mesmo se houvesse uma variavel chamada 'nome' dentro DESTA funcao o seu nome/resultado ainda seria
    // 'Jesus', já que ele está executando é o 'nome' de falaNomeFunction, que no escopo dela foi 'Jesus'.
falaNomeFunction()
}
usaFalaNomeFunction(); // o resultado disto sera printar Jesus, pois a mesma executa a funcao
// falaNomeFunction que enxerga primeiro 'Jesus' pois nao procura por outra variavel de nome 'nome', ja que
// possui uma com esta declaracao em seu escopo , portanto nao vai procurar por outra variavel no escopo
// vizinho(neste caso global) com o mesmo nome.