function Produto(nome,preco){
    this.nome = nome;
    this.preco = preco;

}
Produto.prototype.aumento = function (percentual){
    return this.preco = this.preco + (this.preco * (percentual/100));
  };
Produto.prototype.desconto = function (percentual){
     return this.preco = this.preco - (this.preco * (percentual/100));
  };
function Camiseta(nome,preco,cor){
    Produto.call(this,nome,preco); // estou passando como se fosse um new Produto() na funcao.
    //camiseta HERDA os metodos e atributos de Produto, mas também pode ter os seus exclusivos, como cor.
    this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype); // atribui os metodos de prototype de Produto 
// para camiseta.

// Para arrumar o erro de printar como Produto{} usa-se a linha abaixo;
Camiseta.prototype.constructor = Camiseta;
const camiseta = new Camiseta('Regata', 7.5, 'Preta');
camiseta.aumento(10); // agora funciona a funcao aumento, apos passar os atributos Produto.prototype.
console.log(camiseta)

Camiseta.prototype.aumento = function(quantia){
    return this.preco += quantia;
}

// porem agora que camiseta tem seu proprio metodo chamado aumento() ele ira sobscrever
//  o aumento de Produto, e ao inves de aumentar porcentagem irá aumentar quantias.

camiseta.aumento(100);
console.log(camiseta) // perceba como agora após a declaracao do metodo proprio de aumento, a camiseta
// vai para 108.25.

function Caneca(nome,preco,material,estoque){
    Produto.call(this,nome,preco);
    this.material = material;
    this.estoque = estoque;
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const caneca = new Caneca('Caneca Chinesa',18,'Porcelana',5);
caneca.aumento(15);
console.log(caneca);