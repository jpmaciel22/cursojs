const _velocidade  = Symbol('velocidade');
class Carro{
    constructor(nome){
        this.nome = nome;
        this[_velocidade] = 0
    }
    acelerar(){
        if(this[_velocidade] >= 180) return;
        this[_velocidade]++;
    }
    freiar(){
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }

    get velocidade(){
        return this[_velocidade];
    }

    set velocidade(valor){
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0 ) return;
        this[_velocidade] = valor;
    }
}

const BMW1 = new Carro('M3');

for(let i = 0; i <= 200; i++){
    BMW1.acelerar();
}

BMW1.velocidade = 2000; // nao funciona mais, tanto por causa do Symbol tanto por conta do
// get e set
console.log(BMW1) // ira printar velocidade 180, ou seja , a classe protegeu a velocidade de passar
//  de 180
// porem para proteger de isso acontecer com mudancas redeclacaradas manualmente, como por exemplo:
// BMW1.velocidade = 1500
// utilizamos SYMBOL e mudamos o nome da variavel, mudarei la em cima.
