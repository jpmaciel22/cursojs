const data = new Date();
console.log(data.toString());

//  const data = new Date(0); 01/01/1970 TIMESTAMP MARCO 0 DA UNIX. Porém como somos GMT-3, dá 31/12/1969.
//  para consertar a hora faz-se a variavel abaixo:
const tresHoras = 60 * 60 * 3 * 1000 // 60(segundos) * 60(minutos) * 3 (horas) * 1000 (milisegundos)
const data0 = new Date(0+tresHoras);
console.log(data0.toString());
const umDia = 60 * 60 * 24 * 1000;
const dataEspecifica = new Date(2001, 8, 11, 9, 13, 23, 690); // o mes de setembro está 8 pois começa em 0.
// ano, mes, dia, hora, minuto, segundo, milesimo de segundo
console.log(dataEspecifica.toString());
const dataEspecificaString = new Date('2001-09-11 09:13:23');
console.log(dataEspecificaString.toString());


function zeroAEsquerda(num){
return num >= 10 ? num : `0${num}`;
}


function formataData(data,GMT){
    const dia = zeroAEsquerda(data.getUTCDate());
    const mes = zeroAEsquerda(data.getUTCMonth() + 1);
   const ano = zeroAEsquerda(data.getUTCFullYear());
   const hora = zeroAEsquerda(data.getUTCHours()+GMT);
   const milisegundos = zeroAEsquerda(data.getUTCMilliseconds());
   const segundos = zeroAEsquerda(data.getUTCSeconds());
   const minutos = zeroAEsquerda(data.getUTCMinutes());

   return `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}.${milisegundos}`
}
const dataAgora = new Date();
const dataAlemanha = formataData(dataAgora,2);
console.log(dataAlemanha);