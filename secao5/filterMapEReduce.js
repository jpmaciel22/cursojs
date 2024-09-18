// Retorne a soma do dobro de todos os pares:
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];
const numerosFiltrados = numeros.filter((valor) => valor%2==0?true:false);
const dobroDosFiltrados = numerosFiltrados.map((valor) => valor * 2);
const somaTotal = dobroDosFiltrados.reduce((acumulador,valor) => {
    acumulador += valor;
    return acumulador
},0)
console.log(somaTotal);

// poderia ser feito também:
const numerosPares = numeros
.filter(valor => valor % 2 === 0)
.map(valor => valor * 2)
.reduce((ac,valor) => ac + valor);


console.log(numerosPares)