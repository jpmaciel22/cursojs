// Construtora -> molde (classe)
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () =>' ORIGINAL ' + this.nome + ' ' + this.sobrenome;
}

// a funcao de mesmo nome de dentro do objeto tem prioridade maior e sobscreve a de prototype.

Pessoa.prototype.nomeCompleto = function(){return this.nome + ' ' + this.sobrenome;}

// Pessoa.prototype === pessoa1.__proto__ 

// instancia:
const pessoa1 = new Pessoa('Joao','M.'); // criando com funcao construtora.
const pessoa2 = new Pessoa('Maria','N.'); 
const data = new Date();
console.dir(pessoa1);
console.dir(data)
console.log(pessoa1.nomeCompleto())

calcularXeY = (x,y) => {return console.log(x+y,x-y,x*y,(x/y).toFixed(2))};
calcularXeY(6,7);