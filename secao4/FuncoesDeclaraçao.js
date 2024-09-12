// first class objects
// function expression
const souUmDado = function(){
    console.log("oi");
}
souUmDado(); // irá executar, pois esta variavel virou uma funcao e poderá ser tratada por meio de
//  outra funcao a partir desta variavel, sendo esta funcao executada.

// exemplo abaixo:
function executaFuncao(funcao){
    console.log('Sera executada uma funcao abaixo deste aviso:');
    funcao();
}

executaFuncao(souUmDado);

const funcaoArrow = () => {console.log('Isto é uma arrow function');};

//  funcao dentro de objetos:
const obj = {

falar(){
    console.log('oi tudo bem');
}

};

obj.falar();
funcaoArrow();