const request = obj => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true)
    xhr.send();

    xhr.addEventListener('load', () => {
        if(xhr.status >= 200 && xhr.status < 300){
            obj.success(xhr.responseText)
        }else {
            obj.error({
                code: xhr.status ,
                msg: xhr.statusText
            });
            
        }
    })
}

document.addEventListener('click', (evento) => {
    const elemento = evento.target;
    const tag = elemento.tagName.toLowerCase();

    if(tag === 'a'){
        evento.preventDefault();
        carregaPagina(elemento);
    }
})

function carregaPagina(elemento){
    const href = elemento.getAttribute('href');
    request({
        method: 'GET',
        url: href,
        success(response){
            carregaResultado(response);
        },
        error(errorText){
            console.log(errorText);
        },
    })
}

function carregaResultado(response){
 const resultado = document.querySelector('.resultado');
 resultado.innerHTML = response;
};