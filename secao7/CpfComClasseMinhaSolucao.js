class CpfValidacao{
    constructor(cpf){
        this.cpf = cpf
        this.cpfLimpo = this.cpf.replace(/\D+/g, '');
        this.cpfParcial = this.cpfLimpo.slice(0, -2);
        this.cpfArray = this.cpfParcial.split('');
    }

    criaDigito(){
    let soma = 0;
    for(let i = this.cpfArray.length + 1; i>=0;i--){
        soma+=i * Number(this.cpfArray[i]);
    }
      const digito = 11 - (soma % 11);
      return digito > 9 ? '0' : String(digito);

    }
    validacao(){
        if(typeof this.cpfLimpo === 'undefined') return false;
        if(this.cpfLimpo.length !== 11) return false;
        
        const digito1 = this.criaDigito(this.cpfParcial);
        const digito2 = this.criaDigito(this.cpfParcial + digito1);

        const novoCpf = this.cpfParcial + digito1 + digito2;
        return novoCpf === this.cpfLimpo;
    }
}

const cpf1 = new CpfValidacao('070.987.720-03');
console.log(cpf1.cpfLimpo)
console.log(cpf1.cpfArray)
console.log(cpf1.cpfParcial)
console.log(cpf1.criaDigito())
if(cpf1.validacao()) {
    console.log('Cpf válido');
  } else {
    console.log('Cpf inválido');
  }