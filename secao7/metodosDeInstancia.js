class ControleRemoto{
    constructor(tv){
        this.tv = tv
        this.volume = 0;
    }
    aumentarVolume(){
        this.volume += 2;
    }
    diminuirVolume(){
        this.volume -= 2;
    }
}

const controle = new ControleRemoto('LG')
for(let i = 0 ; i <10 ; i++){
    controle.aumentarVolume();
}
console.log(controle)