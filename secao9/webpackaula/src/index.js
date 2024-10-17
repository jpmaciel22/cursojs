class Somador{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    soma(){
    return this.x + this.y;
    }
}

const num = new Somador(2,2);
console.log(num.soma())