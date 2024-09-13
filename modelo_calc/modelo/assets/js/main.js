function criaCalculadora(){
    container = document.querySelector('.container');
    return{
        
        display: document.querySelector('.display'),

        
        
        inicia(){
            this.cliqueBotoes(); // é necessario chamar com this. antes pois se referencia a uma funcao
            // do proprio objeto.
            this.btnClear();
        },
        cliqueBotoes(){
            // até este ponto o this era o objeto calculadora, mas na funcao abaixo muda
            // ja que usamos o event listener para capturar o objeto que esta sendo clicado
            // portanto o this muda.
            // para corrigirmos isto adicionaremos .bind(this) no final da funcao, é utilizado
            //  para mudar o objeto de referencia da funcao, e o this fora desta funcao é a calculadora,
            //  portanto funciona.
            // isto de bind pode ser substituido caso usassemos uma arrow function, ja que 
            // a arrow function nao permite a mudanca do valor do objeto de this.
            document.addEventListener('click',function(evento){
            const elemento = evento.target;
                if(elemento.classList.contains('btn-num')){
                    this.btnParaDisplay(elemento.innerText); // funcao que transformara o numero do 
                    // botao em numero no display , passa como argumento o texto de dentro do elemento.
                }
                if(elemento.classList.contains('btn-clear')){
                    this.btnClear();
                }
                if(elemento.classList.contains('btn-del')){
                    this.deleteNum();
                }
                if(elemento.classList.contains('btn-eq')){
                    this.btnResultado();
                }
            }.bind(this));
        },

        btnParaDisplay(valor){
            this.display.value += valor; // junta o texto no valor dentro do display, seu texto.
            this.display.focus(); // para o display sempre estar pronto para digitar.
        },

        btnClear(){
            this.display.value = ' '; // colocamos uma string vazia no texto interno, o seu valor.
            this.display.focus(); // para sempre abrir o display
        },

        deleteNum(){
            this.display.value = this.display.value.slice(0,-1); // a funcao slice separa a string
            // a partir do primeiro indice até o ultimo, porém o ultimo não é incluso.
        },

        btnResultado(){
            this.display.value = eval(this.display.value);
            // o eval se aproveita de uma propriedade do javascript de tentar resolver strings
            // tratando as como number e faz a conta como se fosse numbers.
            // exemplo : eval("2+2")  resultado >> 4
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();