let nome = "João"; // criando
var nome2 = "João"; // criando
const verdadeiro = true;
// let nao pode ser redeclarado mas var pode.
// let tem escopo de blocos e nao sao  sempre variaveis globais.
// var so tem escopo de funcao

if(verdadeiro){
let nome = 'Pedro'; // criando
var nome2 = 'Pedro'; // redeclarando
if(true){
    let nome = 'Paulo'; // criando
    var nome2 = 'Paulo' // redeclarando
}

}

console.log(nome,nome2); // nota-se que ficou JOAO PAULO, enqnt let fez a referencia para a primeira variavel
// criada no escopo dela ignorando as outras criacoes fora do escopo dela, var se mantem global funcionando
//  em toda a funcao nesse caso a main , se ela estivesse dentro de uma funcao ela estaria invisivel para a
//  de fora.