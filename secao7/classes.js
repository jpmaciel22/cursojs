class Pessoa{
    constructor(nome,sobrenome,numero){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.numero = numero;
    }   
    potenciar(){
        console.log(this.numero**this.numero);
    }
} // funciona igual uma funcao construtora na questao de prototypes, os metodos declarados acima ja sao vistos
// como prototypes e quando utilizados pelo p1 estao escondidos no prototype da classe Pai ''Pessoa''

const p1 = new Pessoa('OI', 'TUDO BEM?',3);
p1.potenciar()
