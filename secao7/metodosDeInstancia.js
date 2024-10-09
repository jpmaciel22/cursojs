class ControleRemoto{
    constructor(tv){
        this.tv = tv
        this.volume = 0;
    }
    //metodos de instancia
    aumentarVolume(){
        this.volume += 2;
    }
    diminuirVolume(){
        this.volume -= 2;
    }
 //metodo estatico
    static ComprarControle(){
        console.log('Controle comprado.')
    }
}

const controle = new ControleRemoto('LG')
for(let i = 0 ; i <10 ; i++){
    controle.aumentarVolume();
}
console.log(controle)
ControleRemoto.ComprarControle() // ele não tem acesso aos dados de instancia.
// caso colocasse no console.log ali de cima um this.volume ele nao teria acesso ao dado e daria undefined.
