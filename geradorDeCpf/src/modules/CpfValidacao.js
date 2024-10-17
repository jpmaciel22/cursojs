export default class CpfValidacao{
    constructor(cpf){
        this.cpfLimpo = cpf.replace(/\D+/g, '');
    }
    validacao(){
      if(this.cpfLimpo.length !== 11) return false;
      if(typeof this.cpfLimpo !== 'string') return false;
      if(!this.cpfLimpo) return false;
      const cpfParcial = this.cpfLimpo.slice(0, -2);
      const digito1 = CpfValidacao.criaDigito(cpfParcial);
      const digito2 = CpfValidacao.criaDigito(cpfParcial + digito1);
      let novoCpf = cpfParcial + digito1 + digito2;
      return novoCpf === this.cpfLimpo;
  }
   static criaDigito(cpfParcial){
      let soma = 0;
      let reverso = cpfParcial.length + 1;
  
      for(let i of cpfParcial) {
        soma += reverso * Number(i);
        reverso--;
      }
  
      const digito = 11 - (soma % 11);
      return digito <= 9 ? String(digito) : '0';

    }
}
