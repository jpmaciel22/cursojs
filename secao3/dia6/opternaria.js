// ? :
/**
 * exemplo 1: 
 * let pontuacaoUsuario = 999;
 * 
 * if (pontuacaoUsuario >= 1000){
 * console.log('Usuário VIP');
 * }
 * else {
 * console.log('Usuário Normal');
 * }
 * 
 */

// isto feito no exemplo acima em operações ternarias seria:

const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal'
console.log(nivelUsuario);

const corUsuario = null;
const corPadrao = corUsuario || 'Preta'; // neste caso ele faz a checagem de OU e como a do usuário é nula
//  ele seta a cor preta como DEFAULT
// caso o usuário tivesse escolhido uma cor, esta seria a selecionada, já que o primeiro true é oq importa.
