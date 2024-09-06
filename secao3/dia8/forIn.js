const pessoa = {
nome: 'Joao',
sobrenome: 'Maciel',
idade: 19,
}
//i =               0      1      2         3
const carros = ['VOLVO', 'BMW', 'FORD', 'CHEVY'];

for ( let i = 0; i < carros.length ; i++){
    console.log(carros[i]);

}
console.log("--------------------")
for ( let i in carros){

    console.log(carros[i])
}

//  este for in acima faz exatamente a mesma coisa que o for acima dele.
//  a questao é que ele esta iterando sobre o ÍNDICE ou ATRIBUTOS ( caso seja objeto )
//  e o for classico esta fazendo manualmente esta contagem, onde voce mesmo diz ate onde contar.

console.log("--------------------")

for ( let i in pessoa){
    //  para pegar o valor dentro de cada atributo é:
    console.log(pessoa[i]);
}
console.log("--------------------")

for ( let i in pessoa ) {

    console.log(i)  // nota-se que imprimirá os atributos de pessoa.
    // >> nome sobrenome idade
}