const elementos = [
    {tag: 'p', texto: 'Oi tudo bem'},
    {tag: 'div', texto:'Oi tudo bem'},
    {tag: 'footer', texto:'Oi tudo bem'},
    {tag: 'section', texto:'Oi tudo bem'},
    ];

function funcaoDefault(){
    sectionTexto(elementos);
}
function sectionTexto(array){
const section = document.querySelector('.container')
const div = CriaElementos();
section.appendChild(div);

}


function criaElementos(){
    for(i = 0; i < 4;i++){
        const elemento = document.createElement(elementos[i].tag);
        console.log(elemento);
        elementos[i].innerHTML = elementos[i].texto;
    }
}

funcaoDefault();