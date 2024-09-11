//  estarei mostrnado abaixo uma alternativa para os add event listeners do main
document.addEventListener('click',function (event){
    const elemento = event.target;
    if (elemento.classList.contains('parar')){
        pararTimer();
    }
    if (elemento.classList.contains('pausar')){
        pausarTimer();
        timer.classList.add('pausado');
    }
    if (elemento.classList.contains('iniciar')){
        iniciaTimer();
        timer.classList.remove('pausado');
    }


})