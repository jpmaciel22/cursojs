const hexInput = document.querySelector('.textoHex')
const botaoHex = document.querySelector('.botaoHex')
const resultadoDivHex = document.querySelector('.resultadoHex');

const resultadoDivDecimal = document.querySelector('.resultadoDecimal')
const decimalInput = document.querySelector('.textoDecimal')
const botaoDecimal = document.querySelector('.botaoDecimal')

const executaHex = () => {
    botaoHex.addEventListener('click',e => {
    const el = e.target;
    const decimal = parseInt(hexInput.value);
    calcularHex(decimal);
    })
}

const executaDecimal = () => {
    botaoDecimal.addEventListener('click',e => {
    const el = e.target;
    const hex = parseInt(decimalInput.value);
    calcularDecimal(hex);
    })
}

const calcularDecimal = (hex) => {
    divisoesSucessivasDecimal(hex)
}

const  divisoesSucessivasDecimal = (hex) => {
    const regex = /[A-F]/;  // expressao regular para verificar
    const arrayDoHex = hex.split('')
    if(regex.test(hex)){
        const hexNumerico = hex.replace(regex, match => {
            switch(match.toUpperCase()) {
                case 'A': return '10';
                case 'B': return '11';
                case 'C': return '12';
                case 'D': return '13';
                case 'E': return '14';
                case 'F': return '15';
                default: return match; 
            }
        });
        arrayDoHex = hexNumerico.split('')
    }
    for(i in arrayDoHex){
        arrayDoHex[i] = arrayDoHex[i] * (16*i)
    }
    const decimal = arrayDoHex.join('')
    resultadoDivHex.innerHTML = decimal

}
 
const calcularHex = (decimal) => {
    divisoesSucessivasHex(decimal);
}

const divisoesSucessivasHex = (decimal) => {
    let quociente =  Math.floor(decimal / 16);
    const restos = [];

    restos.push(decimal%16)
    while( quociente !==  0){
        restos.push(quociente % 16)
        quociente = Math.floor(quociente / 16);
    }

restos.reverse()

const hex = restos.map(resto => {
    if (resto < 10) {
        return resto.toString();
    } else {
        return String.fromCharCode(resto - 10 + 65);
    }
}).join('');

resultadoDivHex.innerHTML = '0x'+hex

}

executaHex();
executaDecimal();
// executarBinario();
// executarDeciParaBinario();