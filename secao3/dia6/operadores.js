/** Operadores de comparação -- AULA 37
 *  > maior que 
 *  >= maior igual que
 *  < menor que
 *  <= menor igual que
 *  == igualdade entre valor
 *  === igualdade entre valor e tipo
 *  != diferente entre valor
 *  !== diferente estrito entre valor e tipo
 */

// é melhor utilizar "===" para verificações, pois o JS faz a correção de tipo automática
//  entre strings e numbers e retorna TRUE. exemplo abaixo:
let n1 = 10;
let n2 = '10';
console.log(n1==n2); // >> true
console.log(n1===n2); // >> false

/** OPERADORES LÓGICOS -- AULA 38
 * && AND
 * || OR
 * ! NOT
 */

