// Funcao construtora -- > objetos
// Funcao factory -- > objetos
// Construtora -- > Pessoa ( new )
//convencao para funcoes construtoras é comecar com letra maiuscula
function Pessoa(nome,sobrenome,x,y){

// ------ Atributos Privados ------
    const ID = 12312313; // isso é apenas interno nao sera usado externamente como pessoa1.ID;
// assim como:
const metodoInterno = function(){

};
// ------ Atributos Publicos ------
this.nome = nome;
this.sobrenome = sobrenome;
this.soma = function(){
return x+y;
};
}
pessoa1 = new Pessoa('joao','maciel',1,2);

console.log(pessoa1.nome)
console.log(pessoa1.soma())
