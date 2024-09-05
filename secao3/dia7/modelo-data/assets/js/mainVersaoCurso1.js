const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toString();

function getdiaSemana(diaNumeroSemana){
const diasSemana = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
return diasSemana[diaNumeroSemana];
}

function getNomeMes(numeroMes){
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho' , 
        'julho', 'agosto', 'setembro' , 'outubro', 'novembro', 'dezembro'];
        return meses[numeroMes];
}

function criaData(data){
    const diaNumeroSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getdiaSemana(diaNumeroSemana);
    const nomeMes = getNomeMes(numeroMes);
    function zeroAEsquerda(num){
        return num >= 10 ? num : `0${num}`;
        }

    return `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} `
    + `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}:${zeroAEsquerda(data.getSeconds())}`
            

}

h1.innerHTML = criaData(data);