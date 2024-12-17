const hexInput = document.querySelector('.textoHex')
const botaoHex = document.querySelector('.botaoHex')
const resultadoDivHex = document.querySelector('.resultadoHex');

const resultadoDivDecimal = document.querySelector('.resultadoDecimal')
const decimalInput = document.querySelector('.textoDecimal')
const botaoDecimal = document.querySelector('.botaoDecimal')

const textodb = document.querySelector('.textodb')
const botaodb = document.querySelector('.botaodb')
const resultadodb = document.querySelector('.resultadodb');


const textoBinario = document.querySelector('.textoBinario')
const botaoBinario = document.querySelector('.botaoBinario')
const resultadoBinario = document.querySelector('.resultadoBinario');


const executaHex = () => {
    botaoHex.addEventListener('click',e => {
    const el = e.target;
    const decimal = parseInt(hexInput.value);
    calcularHex(decimal);
    })
}

const executaBinario = () => {
    botaoBinario.addEventListener('click',e => {
    const el = e.target;
    const binario = parseInt(textoBinario.value);
    calcularBinario(binario);
    })
}

const calcularBinario = (binario) => {
    const binarioD = parseInt(binario,10).toString(2)
    resultadoBinario.innerHTML = binarioD
}

const executadb = () => {
    botaodb.addEventListener('click',e => {
    const el = e.target;
    const decimalb = parseInt(textodb.value);
    calcularDecimalB(decimalb);
    })
}

const executaDecimal = () => {
    botaoDecimal.addEventListener('click',e => {
    const el = e.target;
    const hex = parseInt(decimalInput.value);
    calcularDecimal(hex);
    })
}
calcularDecimalB = (decimalb) => {
    divisoesSucessivasDecimalB(decimalb)
}

divisoesSucessivasDecimalB = (decimalb) => {
    const decimal = parseInt(decimalb,2)
    resultadodb.innerHTML = decimal
}

const calcularDecimal = (hex) => {
    divisoesSucessivasDecimal(hex)
}

// const  divisoesSucessivasDecimal = (hex) => {  // expressao regular para verificar
//     hex = String(hex).toUpperCase();
//      let hexNumerico = hex.toUpperCase().replace(/[A-F]/g, match => {
//         switch (match) {
//             case 'A': return '10';
//             case 'B': return '11';
//             case 'C': return '12';
//             case 'D': return '13';
//             case 'E': return '14';
//             case 'F': return '15';
//             default: return match; // Não altera números já existentes
//         }
//     });
//     let decimal = 0;
//     let length = hexNumerico.length;
//     for(i in hexNumerico){
//         const digit = parseInt(hexNumerico[i], 10);
//         const power = length - i - 1;
//         decimal += digit * Math.pow(16, power); 
//     }
//     resultadoDivDecimal.innerHTML = decimal

// }

const  divisoesSucessivasDecimal = (hex) => {  // expressao regular para verificar
   const decimal = Number(hex)
     resultadoDivDecimal.innerHTML = decimal
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
executaBinario();
executadb();