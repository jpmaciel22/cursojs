let data = new Date();
let diaNumeroSemana = data.getDay();


function funcaoDefault(){
    diaSemana = getdiaSemana(diaNumeroSemana);
    dataFormatada = getDataFormatada(data);
    setTextoDataBox(diaSemana,dataFormatada);

}

function criah1(){
    const h1 = document.createElement('h1'); // cria na var h1 o elemento paragrafo de HTML
    return h1;
}

function setTextoDataBox(diaSemana,data){
    const dataBox = document.querySelector('.dataBox');
    dataBox.innerHTML = '';
    const h1 = criah1();
    h1.innerHTML = `${diaSemana},${data}`;
    dataBox.appendChild(h1);

}

function getdiaSemana(diaNumeroSemana){
    let diaSemanaTexto;

    switch (diaNumeroSemana){

        case 0 : diaSemanaTexto = 'Domingo';
        return diaSemanaTexto;

        case 1 : diaSemanaTexto = 'Segunda';
        return diaSemanaTexto;

        case 2 : diaSemanaTexto = 'Terca';
        return diaSemanaTexto;

        case 3 : diaSemanaTexto = 'Quarta';
        return diaSemanaTexto;

        case 4 : diaSemanaTexto = 'Quinta';
        return diaSemanaTexto;

        case 5 : diaSemanaTexto = 'Sexta';
        return diaSemanaTexto;

        case 6 : diaSemanaTexto = 'Sábado';
        return diaSemanaTexto;

        default: diaSemanaTexto = 'Dia Inválido'
        return diaSemanaTexto;

    }
}

function getDataFormatada(data){
    function zeroAEsquerda(num){
        return num >= 10 ? num : `0${num}`;
        }

    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
   const ano = zeroAEsquerda(data.getFullYear());
   const hora = zeroAEsquerda(data.getHours());
   const milisegundos = zeroAEsquerda(data.getMilliseconds());
   const segundos = zeroAEsquerda(data.getSeconds());
   const minutos = zeroAEsquerda(data.getMinutes());

   return `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}.${milisegundos}`


}

funcaoDefault();