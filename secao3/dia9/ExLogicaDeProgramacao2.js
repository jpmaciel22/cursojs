//  Escreva uma funcao que recebe um numero e retorne :
//  numero divisivel por 3 = fizz
//  numero divisivel por 5 = buzz
//  Numero é divisivel por 3 e 5 fizzbuzz
//  numero nao e divisivel nem por 3 nem 5 , retorna o proprio numero.
//  cheque se o numero realmente é um numero

function OiTdBem(n){
if (typeof n != NaN){
if( n % 3 === 0 && n % 5 === 0){
    return 'FizzBuzz'
}
else if( n % 3 === 0 ){
    return 'Fizz'
}
else if(n % 5 === 0){
    return 'Buzz'
}
else{
    return n;
}}else return 'Não é um numero';
}

for (let i = 0; i <= 100; i++ ){console.log(OiTdBem(i),i);}