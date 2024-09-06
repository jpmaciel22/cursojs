//  for Of é para ser utilizado exclusivamente com coisas que tem ÍNDICE, como por exemplo um array
//  e uma STRING que é basicamente um array de chars... então so array mesmo.......
const marca = 'VOLVO';
const carros = ['VOLVO', 'BMW'];
console.log(carros[0][2]); // isto prova a afirmação acima......
//  >> L

for( let i of marca){
    console.log(i); //>> V O L V O      , imprime cada letra.
}

console.log('################');

for(let i of carros){

    console.log(i); // imprime os valores do array.
}
console.log('################');

//  portanto isto substitui :

for ( let i = 0; i < carros.length ; i++){

    console.log(carros[i]);
}

console.log('################');

carros.forEach(function(valor, indice){ //esta funcao é por default para ser usada assim.
    console.log(valor, indice);
});

/***  portanto sao a mesma coisa:
 * for ( let i = 0 ; i < carros.length ; i++){console.log(carros[i])}
 * for (let i in carros){console.log(carros[i])}
 * for (let i of carros){console.log(i)}
 * 
 */


// For classico retorna tanto o valor quanto o indice e funciona apenas com arrays e strings
//  for in funciona tanto com arrays e strings quanto com objetos e retorna os indices os parametros
//  e os valores.
//  for of utiliza-se para achar apenas o valor dos arrays e strings.