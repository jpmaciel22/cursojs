// const request = obj => {
//     return new Promise((resolve,reject) =>{
//     const xhr = new XMLHttpRequest();
//     xhr.open(obj.method, obj.url, true)
//     xhr.send();

//     xhr.addEventListener('load', () => {
//         if(xhr.status >= 200 && xhr.status < 300){
//             resolve(xhr.responseText);
//         }else {
//             reject(xhr.statusText);
//         };
//     });
//     });
// };

document.addEventListener('click', (evento) => {
    const elemento = evento.target;
    const tag = elemento.tagName.toLowerCase();

    if(tag === 'a'){
        evento.preventDefault();
        carregaPagina(elemento);
    }
})

async function carregaPagina(elemento){
    try{
    const href = elemento.getAttribute('href');
    const response = await fetch(href);
    if(response.status!== 200) throw new Error('ERRO 404.');
    const html = await response.text();
    carregaResultado(html);

    // isso foi como se fosse um then , so que sem essas partes pois o fetch ja faz um promise
    // e o await ja faz a espera do promise entao nao precisa...
    }catch(erro){console.error(erro)}}

function carregaResultado(response){
 const resultado = document.querySelector('.resultado');
 resultado.innerHTML = response;
};