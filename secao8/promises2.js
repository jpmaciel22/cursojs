function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function EsperaAi(msg,tempo){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string'){ reject ('Bad Value.'); return;}
            resolve(msg.toUpperCase() + ' - Passei na promise.');
        }, tempo);
    });
}

// Promise.all Promise.race Promise.resolve Promise.reject
// const promises = [
//     EsperaAi('Promise 1',rand(1,5)),
//     EsperaAi('Promise 2',rand(1,5)),
//     EsperaAi('Promise 3',rand(1,5)),
//     EsperaAi(2000,rand(1,5)),
// ];

// // Promise.all(promises).then((msg)=>{
// //     console.log(msg);
// // })
// // .catch((erro)=>{console.log(erro)})

// Promise.race(promises).then((msg)=>{
//     console.log(msg);
// }).catch((erro)=>{console.log(erro)}) // entrega o primeiro valor que executar mais rapido.
// // após isso ele até continua executando mas não printa o resto.

function BaixarPagina(){
    const emCache = true;

    if(emCache){
        return Promise.resolve('Página já está em cache')
    }else{
        return EsperaAi('Baixei a página',3000)
    }
}

BaixarPagina()
.then(dadosPagina => {
    console.log(dadosPagina);
})
.catch(erro => console.log('ERRO', erro))