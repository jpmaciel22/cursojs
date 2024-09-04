const form = document.querySelector('#form');
form.addEventListener('submit', function (e){
e.preventDefault();
setResultado('');
const inputAltura = e.target.querySelector('#altura'); 
const inputPeso = e.target.querySelector('#peso'); // e.target pega como alvo a caixa no qual o evento 
// esta ocorrendo e selecionado
const peso = Number(inputPeso.value)
const altura = Number(inputAltura.value)

if(!peso){
    setResultado('Peso inválido', false);
    return;
}

if(!altura){
    setResultado('Altura inválida', false);
    return;
}

const imc = getImc(peso, altura);
const nivelImc = getNivelImc(imc);
const msg = `Seu IMC é ${imc} (${nivelImc}).`;
setResultado(msg,true);
})


function getNivelImc(imc){
const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3']

if(imc >= 39.9) return nivel[5];
if(imc >= 34.9) return nivel[4];
if(imc >= 29.9) return nivel[3];
if(imc >= 24.9) return nivel[2];
if(imc >= 18.5) return nivel[1];
if(imc < 18.5) return nivel[0];

}


function getImc(peso, altura){
const imc = peso / altura ** 2;
return imc.toFixed(2); // coloca o float em 2 casas decimais

}





function criaP(){
    const p = document.createElement('p'); // cria na var p o elemento paragrafo de HTML
    return p;
}

function setResultado(msg, isValid){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = ''; // cria o elemento da string do resultado e zera ela
    const p = criaP();

if (isValid) {p.classList.add('paragrafo-resultado');}
else{p.classList.add('paragrafo-incorreto');}

    p.innerHTML = msg; // insere em P o texto digitado pela var msg
    resultado.appendChild(p); // insere no elemento resultado o que estiver no paragrafo p

}