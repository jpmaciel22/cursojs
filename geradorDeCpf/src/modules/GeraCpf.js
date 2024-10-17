import CpfValidacao from "./CpfValidacao";

export default class GeraCpf{
    rand(min = 100000000,max = 999999999){
        return String(Math.floor(Math.random() * (max-min) + min));
    }

    geraNovoCpf(){
        const cpfSemDigito = this.rand();
        const digito1 = CpfValidacao.criaDigito(cpfSemDigito);
        const digito2 = CpfValidacao.criaDigito(cpfSemDigito + digito1);
        const novoCpf = cpfSemDigito + digito1 + digito2;
        return this.formataCpf(novoCpf);
    }
    
    formataCpf(cpf){
        return(
            cpf.slice(0,3) + '.' +
            cpf.slice(3,6) + '.' + 
            cpf.slice(6,9) + '-' +
            cpf.slice(9,11)
        );
    }
}