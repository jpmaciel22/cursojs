const pessoa1 = {
    nome: 'Joao',
    sobrenome: 'Maciel',
    idade: 19,
};
const pessoa2 = new Object();
pessoa2.nome = 'Tomas';
pessoa2.sobrenome = 'De Aquino';
console.log(pessoa2) // exatamente igual ao pessoa1
pessoa1.getDataNascimento = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}
console.log(pessoa1.getDataNascimento());

function Pessoa(nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    Object.freeze(this); // isto faz com que os atributos sejam travados, como uma const
    // so que para atributos, já que a variavel em si ja nao seria mudada por ser const.
}

const p1 = new Pessoa('Nicolas','Maduro');
console.log(p1);
