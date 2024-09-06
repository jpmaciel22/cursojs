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
