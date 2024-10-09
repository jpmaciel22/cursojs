class CpfValidacao{
    constructor(cpf){
        this.cpfLimpo = cpf.replace(/\D+/g, '');
    }
    gerarOCpf(){
      const cpfParcial = this.cpfLimpo.slice(0, -2);
      const digito1 = CpfValidacao.criaDigito(cpfParcial);
      const digito2 = CpfValidacao.criaDigito(cpfParcial + digito1);
      this.novoCPF = cpfParcial + digito1 + digito2;
    }
    validacao(){
      if(this.cpfLimpo.length !== 11) return false;
      this.gerarOCpf();
      this.novoCpf === this.cpfLimpo;
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

let cpf1 = new CpfValidacao('070.987.720-03');
if (cpf1.validacao()) {
  console.log('CPF válido');
} else {
  console.log('CPF inválido');
}