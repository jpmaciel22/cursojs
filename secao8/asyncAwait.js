function rand(min = 0, max = 3){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function EsperaAi(msg,tempo){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string'){ reject ('Bad Value.'); return;}
            resolve(msg.toUpperCase() + ' - Passei na promise.'); return;
        }, tempo);
    });
}
// acima tem os procedimentos que sao como a promise trata quando da certo e quando da errado.
// portanto o resolve sera feito com o then(); 
// o reject sera executado no catch porem ele para o resto dos thens caso dê errado.
// portanto com a execucao do then passa no parametro o valor do espera ai, se der certo
// o then executa um resolve, se der errado o catch executa o reject.


// EsperaAi('Fase 1', rand())
// .then((msg)=>{
//     console.log(msg);
//     return EsperaAi('Fase 2',rand());
// }).then((msg)=>{console.log(msg); return EsperaAi(4,rand())}).then((msg)=>{
//     console.log(msg);
// }).catch((erro)=>{console.log(erro)});

// agora faremos o mesmo que esse codigo acima porem com async e await.

async function executa(){
    try{
    const fase1 = EsperaAi('Fase 1', 1000);
    console.log(fase1)

    setTimeout(function(){
    console.log('Esta promise estava pendente ', fase1)
    },1100)

    const fase2 = await EsperaAi('Fase 2', rand());
    console.log(fase2)
    const fase3 = await EsperaAi(2, rand());
    console.log(fase3)
    } catch(erro){
        console.log(erro);
    }
}
executa()