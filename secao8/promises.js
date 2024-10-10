function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function EsperaAi(msg,tempo){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

console.log(EsperaAi('OI',rand(1,3))
.then(resposta => {
    console.log(resposta);
    return EsperaAi('OI 2',rand(1,3));
}).then(resposta => {
    console.log(resposta);
    return EsperaAi('OI 3',rand(1,3));
}).then(resposta => {
    console.log(resposta);
})
.catch())