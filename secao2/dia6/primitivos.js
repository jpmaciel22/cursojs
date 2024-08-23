/**
 * Primitivos (imutáveis): string, number, boolean, undefined, null (bigint, symbol) - Valor
 * Referência (mutável): array, object, function
 * 
 */

// portanto explicarei praticamente nos exemplos abaixo a diferenca que isso traz
let a = 4;
let b = a;
// o resultado da printagem de console.log(a,b); será
// >> 4 4 
// porém se fizermos 
a = 5;
// e após isso console.log(a,b); 
// >> 5 4
// isso pois são valores imutáveis, porém se fossem um array de elementos, ao mudar
// a eu mudaria consequentemente B também, já que os mesmos estão apontando para um valor na memória
// segue exemplo abaixo:
let a2 = [1,2,3];
let b2 = a2;
// resultado de console.log(a,b); neste caso seria:
// >> [ 1, 2, 3 ] , [ 1, 2, 3 ]
// porém ao fazer:
a2.push(4);
//  o resultado será :
// >> [ 1, 2, 3, 4 ] , [ 1, 2, 3, 4 ]
// para fazer os valores divergirem e fazer b parar de ser um ponteiro para o array de a, 
//  tem-se que fazer um ''spread'' dos valores do array de a como o exemplo abaixo:
let a3 = [3,4,5];
let b3 = [...a3];
// agora B3 apenas possui o conteudo do MOMENTO de a3 neste caso [3,4,5], portanto
//  mesmo ao dar PUSH em A3 com um novo valor, b3 nao pegará este valor.
