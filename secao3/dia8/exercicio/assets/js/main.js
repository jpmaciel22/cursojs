const elementos = [
    {tag: 'p', texto: 'Oi tudo bem'},
    {tag: 'div', texto:'Oi tudo bem'},
    {tag: 'footer', texto:'Oi tudo bem'},
    {tag: 'section', texto:'Oi tudo bem'},
    ];

const container = document.querySelector('.container');
const div = document.createElement('div');



for(let i = 0; i < elementos.length; i++){
//console.log(elementos[i].tag);
let {tag, texto} = elementos[i];
console.log(tag);
let tagDosElementos = document.createElement(tag);
tagDosElementos.innerHTML = texto;
}