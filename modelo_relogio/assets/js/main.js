const container = document.querySelector('.container')
const timer = container.querySelector('.timer');
const iniciar = container.querySelector('.iniciar');
const pausar = container.querySelector('.pausar');
const parar = container.querySelector('.parar');
let segundos = 0;

iniciar.addEventListener('click',function (evento){
    timer.style.color = 'red';
    });
pausar.addEventListener('click',function (evento){
    
});
parar.addEventListener('click',function (evento){
    
});

function createTimerFromSeconds(segundos){
    const data = new Date(segundos*1000);
    return data.toLocaleTimeString('pt-BR',{hour12: false, timeZone: 'UTC',});
} // essa funcao cria a data 01/01/1970, 00:00:00.

function iniciaRelogio(){
    const timer = setInterval(function(){},1000)
}