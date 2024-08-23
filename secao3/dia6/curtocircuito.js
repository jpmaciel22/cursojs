// Em java script a checagem de false e true para ao achar um valor FALSE quando se está
//  usando o operador AND. portanto ao executar um console log com && e tiver um FALSE 
//  o valor impresso será O VALOR QUE DEU FALSE.
//  exemplo de valores que podem ser considerados false abaixo(falsy values):
// -------------------
// false, 0 , "", '', ``, null, undefined, NaN
// -------------------
// portanto qualquer valor diferente destes será TRUE.
console.log('Joao' && 'Pedro');
// >> Pedro  (true)
console.log('Joao' && NaN && 'Pedro');
// >> NaN    (false)
// exemplo de como pode ser prático abaixo, fazendo um IF rapidamente para a execucao de uma
// funcao apenas quando for true outro valor
function oi(){
    return 'oi';
};
let executara = false;
console.log(executara && oi()); // >> false , e nao executa 'oi'.
executara = true;
console.log(executara && oi()); // >> oi , pois agora o valor foi mudado e é true.

// o mesmo acontece com OR , como no exemplo abaixo:
console.log(0 || false || NaN || 'Joao' || true); // >> Joao , pois foi o primeiro true e o JS 
// executa o ''curto circuito'' e ja retorna o primeiro valor true encontrado.