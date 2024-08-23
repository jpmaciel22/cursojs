// AULA 34

function funcao(){
const form = document.querySelector('.form'); 
// a constante form está recebendo o valor apontado para a classe form no html
// podia ser também document.getElementsbyClassName
const resultado = document.querySelector('.resultado');
pessoas = [];

function recebeEventoForm(evento) {
    evento.preventDefault(); // previne o comportamento default do navegador de dar refresh
    // na pagina. o evento é passado como parametro para execução da funcao ao ser chamado embaixo no
    // addEventListener.
    const nome = form.querySelector('.nome');
    const sobrenome = form.querySelector('.sobrenome');
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');

    pessoas.push({
    nome: nome.value,
    sobrenome: sobrenome.value,
    peso: peso.value,
    altura: altura.value,
    }) // aqui adicionamos diretamente os valores no array pelo pessoas.push
    // porém estamos declarando diretamente dentro do array no mesmo escopo as
    // caracteristicas do objeto que sera inserido neste array.

// .value faz printar o valor da variavel do campo de html.
    resultado.innerHTML +=`<p>Nome: <strong>${nome.value}</strong> Sobrenome: <strong>${sobrenome.value}</strong> Peso: <strong>${peso.value}</strong> Altura: <strong>${altura.value}</strong>.</p>`
                        };


form.addEventListener('submit', recebeEventoForm); // quando acontecer o evento SUBMIT ele executará 
// a função recebeEventoForm
}

funcao();

// resumo do add event listener e prevent default:
//  no objeto "form", que se refere ao campo de formulario do html, colocamos um
//  vigia de eventos, que olhará pelo evento submit, quando o evento submit acontecer, 
// que é o padrão do clique sobre o envio de formulario, será executada a função recebeEventoForm
//  a função recebeEventoForm recebe o evento que é executado sempre que se clica no botao de envio
//  de formulário, que é o submit, e ativa o preventDefault(), que previne o comportamento padrão de submit
// que seria enviar o formulário e dar refresh na página. 