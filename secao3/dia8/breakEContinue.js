const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
for (let i of numeros){

    if (i === 2){continue;} // pulou o 2 da contagem.
    // todo comando executado antes de continue continua sendo executado. portanto
    //  caso o console.log estivesse antes, o 2 ainda teria sido printado. já que continue pula
    //  para a proxima iteracao e break para o sistema.
    if (i === 5){break;} // para quando chegar no 5, ou seja o ultimo printado é 4.
    console.log(i);
    //  se o console log tivesse antes do break seria printado.
}