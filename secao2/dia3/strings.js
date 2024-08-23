//AULA 24 - SEÇÃO 2 - STRINGS VER EM CASA.
//indice do array de chars abaixo:
//               0123456789
let umastring = 'Um "texto"';
let umastring2 = "Um \"texto\"";
//caso aponte para um indice nao existente será impresso undefined, e caso tente achar no string algo 
// que não está presente será retornado -1
console.log(umastring[8]); // nota-se que será impresso "o"
console.log(umastring.charAt(8)); // imprime o mesmo resultado

console.log(umastring.concat(' de java script'));

// indexOf de strings imprime em que indice comeca a palavra, por exemplo ao digitar 'texto' será impresso 4, 
// segue exemplo abaixo:
//nota-se que é case sensitive.
// lastIndexOf começa a pesquisa pela ordem contrária.
console.log(umastring.indexOf('texto'));

console.log(umastring.replace('texto', 'pão de queijo')); // replace obviamente substitui uma string pela outra.

console.log(umastring.length); // imprime o tamanho de uma string
console.log(umastring.slice(0,5));// imprime a string de um indice especifico à outro indice
//especifico

console.log(umastring.split('t')); // separa a string por "t"s

console.log(umastring.toUpperCase()); //transforma a frase em CAPS, a toLowerCase() faz o mesmo porem para lowercase. 