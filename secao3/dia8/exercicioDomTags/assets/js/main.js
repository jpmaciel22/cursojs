const objetos = [
    {tag: 'p', texto: 'Oi tudo bem'},
    {tag: 'div', texto:'Oi tudo bem'},
    {tag: 'footer', texto:'Oi tudo bem'},
    {tag: 'section', texto:'Oi tudo bem'},
    ];                   // cria os objetos dentro do array, nesse caso o array seria um array de objetos
    // e na hr de desestruturalizar voce utiliza ele como referencia de objetos da mesma classe
    // , ja que é ele que tem os objetos
    //  e os atributos.

const container = document.querySelector('.container');  // guarda na variavel container a classe referente
//  ao container no HTML
const div = document.createElement('div');
//  guarda na variavel div a criacao do elemento div


for(let i = 0; i < objetos.length; i++){
//console.log(elementos[i].tag);
let {tag, texto} = objetos[i];   // faz um for desestruturalizando cada um dos objetos dentro do array
let tagDosObjetos = document.createElement(tag); // cria a tag na pagina de cada um  e guarda sua referencia
console.log(tag);
// tagDosObjetos.innerText = texto;     // coloca o texto guardado no atributo texto na pagina
//  seria o mesmo que tagDosObjetos.innerHTML
//  pode ser feito também como:
let textoCriado = document.createTextNode(texto)
div.appendChild(tagDosObjetos);    // atribui o tag de objetos dentro da div criada la em cima
tagDosObjetos.appendChild(textoCriado); // bota em cada uma das tags a variavel de texto correspondente
//  a cada uma

}

container.appendChild(div);   // bota a div dentro do container