const form = document.querySelector('#form');
form.addEventListener('submit', function (e){
e.preventDefault();
setResultado('');
const inputAltura = e.target.querySelector('#altura'); 
const inputPeso = e.target.querySelector('#peso'); // e.target pega como alvo a caixa no qual o evento 
// esta ocorrendo e selecionado
const peso = Number(inputPeso.value)
const altura = Number(inputAltura.value)
})

function criaP(){
    const p = document.createElement('p'); // cria na var p o elemento paragrafo de HTML
    p.classList.add('paragrafo-resultado') // insere no paragrafo a classe 'paragrafo-resultado'
    return p;
}

function setResultado(msg){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = ''; // cria o elemento da string do resultado e zera ela
    const p = criaP();
    resultado.appendChild(p); // insere no elemento resultado o que estiver no paragrafo p

}