const data = new Date('2001-09-11 08:46:54');
const diaSemana = data.getDay();
function getWeekdayTexto(diaSemana){
    let diaSemanaTexto;

    switch (diaSemana){

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

console.log(diaSemana, getWeekdayTexto(diaSemana));