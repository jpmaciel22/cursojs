const resultado = (x,y) => x+y;
// defineProperty - defineProperties - Get - Set
function Produto(nome,preco,estoque){
    this.nome = nome;
    this.preco = preco;
    let estoquePrivado = estoque;
    Object.defineProperty(this,'estoque',{
        enumerable:true, // printavel? , deixa de aparecer em Object.keys(o1);
        configurable:true, // se pode ser configuravel novamente depois desta declaracao
        // nao estou colocando VALUE nem WRITABLE aqui para poder usar get e set.
        get:()=>{
            return estoquePrivado;
        },
        set:(valor)=>{
        estoquePrivado = valor;
        },    
    });
// configurar novamente seria declarar denovo este define property para estoque.

    Object.defineProperties(this,{
        nome:{
            enumerable:true,
            value:nome,// valor
            writable:true,// se pode ser mudado o valor do atributo
            configurable:true,
        },
        preco:{
            enumerable:true,
            value:preco,// valor
            writable:true,// se pode ser mudado o valor do atributo
            configurable:false,
        },
    })

    const criaProduto = (nome) =>{
        return{
            get nome(){
                return nome;
            },
            set nome(valor){
                nome = valor;
            }
        }
    }
}
const o1 = new Produto('Camiseta',18);
console.log(o1) // estoque manteve-se privado.
o1.estoque = 4; // set
console.log(o1.estoque) // get