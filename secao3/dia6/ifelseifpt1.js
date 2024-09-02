// AULA 40
// If pode ser usado sozinho. Caso vá ser um bloco de ifs, necessário o 'else if', e para a resposta
//  default usa-se o ELSE.

//  Apenas uma condição pode ser verdadeira na checagem, portanto ele executa a primeira que for true, mesmo
//  que haja mais de uma que for true abaixo dela.
// para executar as duas elas necessitam estar em blocos de if separados
//  por exemplo uma condicao em if sozinha e depois a outra em um else if em outro bloco com outro if iniciando.
const hora = 10;
if (hora >= 0 && hora <= 11){
    console.log("Bom Dia");
}
else if (hora >= 12 && hora <= 17){
    console.log("Boa Tarde");
}
else if (hora >= 18 && hora <= 23){
    console.log("Boa Noite");
} else {
    console.log('Hora Inválida');
}