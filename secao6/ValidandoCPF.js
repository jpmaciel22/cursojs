// 705.484.450-52 --> valido
// 124.856.857-92 -- > invalido
/*
7  0  5  4  8  4  4  5  0 
10 9  8  7  6  5  4  3  2
10 18  32 56 30 30 32 15 14 --> soma = 237

formula: 11 - ( 237 % 11 ) = 5 (primeiro digito pós traço)
Se o numero for maior que 9 consideramos 0.

7  0  5  4  8  4  4  5  0  5
11 10 9  8  7  6  5  4  3  2
77 0  45 32 56 24 20 20 0 10 --> soma = 284 
formula 11 - ( 284 % 11 ) = 2 ( segundo digito pós traço)

705.484.450-52 === 705.484.450-52

se variar algum número, o cpf não é valido.
*/
function ValidaCPF(cpfInserido){
 Object.defineProperty(this,'cpfLimpo',{
 get: function(){
    return cpfInserido.replace(/\D+/g, '');
 }
 });
}

ValidaCPF.prototype.valida = function() {
if(this.cpfLimpo.length !== 11){return false};
const cpfParcial = this.cpfLimpo.slice(0,-2);
const digito1 = this.criaDigito(cpfParcial);
const digito2 = this.criaDigito(cpfParcial + digito1)
const novoCpf = cpfParcial + digito1 + digito2 
if(novoCpf != this.cpfLimpo){return false};

    return true;

}

ValidaCPF.prototype.criaDigito = function(cpfParcial){
    const cpfArray = Array.from(cpfParcial);
    let regressaoMultiplicacao = cpfArray.length + 1;
    const soma = cpfArray.reduce((acumulador,valor) => {
        acumulador += (regressaoMultiplicacao * Number(valor))
        regressaoMultiplicacao--;
        return acumulador;
    }, 0 )
    const digito = 11 - (soma % 11);
    return digito > 9 ? 0 : digito;
}

const cpf = new ValidaCPF('705.484.450-52');
console.log(cpf.valida())