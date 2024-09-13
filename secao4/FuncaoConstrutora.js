// Funcao construtora -- > objetos
// Funcao factory -- > objetos
// Construtora -- > Pessoa ( new )
//convencao para funcoes construtoras é comecar com letra maiuscula
function Pessoa(nome,sobrenome,x,y){
this.nome = nome;
this.sobrenome = sobrenome;
this.soma = function(){

}
}
pessoa1 = new Pessoa('joao','maciel',1,2);

console.log(pessoa1.nome)
