class DispositivoEletronico {
    constructor(nome){
        this.nome = nome
        this.ligado = false;
    }
    ligar(){
        if(this.ligado && !this.nome.endsWith('a')){
            console.log (`${this.nome} já está ligado.`)
        }
        if(this.nome.endsWith('a') && this.ligado){
            console.log (`${this.nome} já está ligada.`)
        }
        this.ligado = true;
    }

    desligar(){
        if(!this.ligado && !this.nome.endsWith('a')){
            console.log (`${this.nome} já está desligado.`)
        }
        if(this.nome.endsWith('a') && !this.ligado){
            console.log (`${this.nome} já está desligada.`)
        }

        this.ligado = false;
    }
}

class Lampada extends DispositivoEletronico {
    constructor(nome,cor){
    super(nome); // faz herdar os parametros da classe pai a 'super', funciona como um call();
    this.cor = cor;
    }
}
const d1 = new Lampada('Lâmpada','Branca');

d1.ligar()
console.log(d1)
d1.ligar()
d1.desligar()
d1.desligar()
