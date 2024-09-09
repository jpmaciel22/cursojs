function soma(x,y){

    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new TypeError('X ou Y não são números.') // colocamos TypeError mas nao precisa, 
        //  é apenas para ajudar o desenvolvedor que vir este error, pode ser escrito apenas throw('mensagem');
    }
    return x + y;
}
// soma(5,'oi'); // o resultado disso será 'X ou Y não são números', e mostra a linha.
try{
    console.log(soma(1,2)); // >> 3
    console.log(soma('1',2)); // mostra o throw, 'X ou Y não são números.'
}catch(error){
console.log(error); // já mostra no console.log o erro digitado em throw na linha 4.
}