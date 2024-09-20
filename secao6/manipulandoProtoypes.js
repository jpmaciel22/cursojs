const objectA = {
    keyA: 'A',
    juncaoLegal(){
        return this.keyA + this.keyB;
    },
    // __proto__ : Object.prototype
};

const objectB = {
    keyB: 'B',
    //__proto__: objectA
};
Object.setPrototypeOf(objectB,objectA);
console.log(objectB.keyA); //>> A
console.log(objectB.juncaoLegal());
// este objeto literal acima é equivalente à: new Object, e para acessar seu prototype: Object.prototype


const MetodosDeProduto = {
    desconto(percentual){
     return this.preco = this.preco - (this.preco * (percentual/100));
    
    },
    aumento(percentual){
        return  this.preco = this.preco + (this.preco * (percentual/100));
    }
    };
        
function Produto(nome,preco){
        this.nome = nome;
        this.preco = preco;
    };
    
Produto.prototype.aumento = function (percentual){
      return this.preco = this.preco + (this.preco * (percentual/100));
    };
Produto.prototype.desconto = function (percentual){
       return this.preco = this.preco - (this.preco * (percentual/100));
    };

let produto1 = new Produto('Camiseta',150);
let produto2 = {
    nome: 'Chuteira',
    preco: 345 ,
};

const produto3 = Object.create(Produto.prototype,{
    nome: {enumerable:true,writable:true,value: "Garrafa d'água"},
    preco: {enumerable:true,writable:true,value: 2},
})
Object.setPrototypeOf(produto1,MetodosDeProduto);
Object.setPrototypeOf(produto2,Produto.prototype);
produto1.aumento(15);
produto2.aumento(14);
produto3.aumento(20);
console.log(produto3)
console.log(produto1); // o produto1 perde a caracteristica Produto no print pois mudamos o seu prototipo
console.log(produto2);