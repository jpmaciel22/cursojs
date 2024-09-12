// Factory function (Função fábrica)
// Constructor function (Função construtora)
nome = 'joao';
function criaPessoa(nome, sobrenome, a, p) {
  return {
    nome,
    sobrenome,

    // Getter
    get nomeCompleto() {
      return `${nome} ${this.sobrenome}`; // usa se o this para se referir ao objeto que esta chamando esta 
      // funcao construtora ou para o escopo da mesma funcao.
    }, // o nome e sobrenome nao precisam ser passados como this, ja que ja estao declarados como parametro
    //  porem, caso nao estivessem seria necessario. Como por exemplo o altura e peso la embaixo.

    // Setter
    set nomeCompleto(valor) {
      valor = valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');
    },

    fala(assunto = 'falando sobre NADA') {
      return `${this.nome} está ${assunto}.`;
    },

    altura: a,
    peso: p,

    // Getter
    get imc() {
      const indice = this.peso / (this.altura ** 2);
      return indice.toFixed(2);
    }
  };
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
const p2 = criaPessoa('João', 'Otávio', 1.90, 57);
const p3 = criaPessoa('Junior', 'Otávio', 1.5, 110);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);
p4 = criaPessoa(nome,'Maciel',1.65,165); // neste caso o nome que foi registrado foi joao, 
// ja que ele estava declarado na variavel e foi utilizado como parametro.
// isso atrapalharia o set caso o 'nome' da linha 11 nao estiver escrito como 'this.nome', 
// ja que foi passado como parametro o valor da variavel nome global na funcao construtora
//  , e continuaria retornando o valor
// da mesma. Caso estivesse escrito this.nome, ao settar um nome diferente ele irá priorizar o nome do objeto
// que foi setado com o metodo set.

// usando se o get ja dentro da classe podemos chamar a funcao imc sem escrever imc();
//  pois a mesma se comporta como um atributo.. mas ainda assim é um metodo/funcao
console.log(p4.nomeCompleto) // >> joao Maciel 
// utilizando o getter acima
//utilizando o setter abaixo:
p4.nomeCompleto = "Jesus Cristo";
console.log(p4.nomeCompleto);
