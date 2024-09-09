function mostraHora(){
    let data = new Date();
return data.toLocaleTimeString('pt-BR');
}
const timer = setInterval(function (){console.log(mostraHora());},1000); //utilizando uma funcao anonima, ou lambda
//  no python.                                                    1000ms, 1s.
setTimeout(function (){clearInterval(timer);},10000);// para a execucao de timer. apos 10000ms , 10s.