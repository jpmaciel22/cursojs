(function(idade,peso,altura){
console.log('oi td bem');
sobrenome = 'Maciel';
function criaNome(nome){
return nome + ' ' + sobrenome; 
}
function printaNome(){
console.log(criaNome('Joao'),idade,peso,altura);
}
printaNome();
})(19,65,1.65); // template de funcao anonima que executa imediatamente e nao atrapalha o escopo global.
// passa os argumentos dos parametros exigidos nos segundos parenteses.