// ESCOPO GLOBAL
function RetornaFuncao(){     // ESCOPO 1
    const nome = 'Joao';
    return function(){ // ESCOPO 2
        return nome;
    };
}
let funcao = RetornaFuncao();
console.log(funcao()); // esta retornando a execucao da funcao anonima que retorna o nome que esta
// no escopo acima q é Joao.