const container = document.querySelector('.container')
const timer = container.querySelector('.timer');
const iniciar = container.querySelector('.iniciar');
const pausar = container.querySelector('.pausar');
const parar = container.querySelector('.parar');
let segundos = 0;
let timerIniciado; // aqui iniciaremos a variavel que sera utilizada
//  em funcoes abaixo, para assim poder chamá-la em outra funcao
// sem executar a funcao em si.

iniciar.addEventListener('click',function (evento){
    // timer.style.color = 'red';
    iniciaTimer();
    timer.classList.remove('pausado');
    });
pausar.addEventListener('click',function (evento){
    // timer.style.color = 'black';
    pausarTimer();
    timer.classList.add('pausado');

});
parar.addEventListener('click',function (evento){
    pararTimer();
});

function createTimerFromSeconds(segundos){
    const data = new Date(segundos*1000);
    return data.toLocaleTimeString('pt-BR',{hour12: false, timeZone: 'UTC',});
} // essa funcao cria a data 01/01/1970, 00:00:00. já que esta data é a 0 em milissegundos da
//  instancia Date(); o retorno é apenas para formatar o Date.

function iniciaTimer(){
    clearInterval(timerIniciado); // para nao ter timers iniciando toda vez q clicar.
    // porem o valor continua o MESMO.
    timerIniciado = setInterval(function(){
    segundos++;
    timer.innerHTML = createTimerFromSeconds(segundos);
    },1000) // esta funcao coloca na variavel timerIniciado o loop de segundos que sera utilizado 
    // no formato de data criado acima. Desta forma a data sempre muda para 00:00:01, 00:00:02
    //  e assim sucessivamente, já que o loop atualiza a cada segundo.
    // o timer.innerHTML = createTimerFromSeconds(segundos), atualiza no TEXTO a data mostrada,
    //  que é o nosso timer.
}

function pararTimer(){
    // segundos = 0;
    // timer.innerHTML = '00:00:00';
    location.reload();       // da reload na pagina, o que faz virar 00:00:00.
}

function pausarTimer(){
    setTimeout(function (){clearInterval(timerIniciado);},1);
    //utilizando o set Timeout para parar o loop e limpar o intervalo do loop após 1 ms.
}