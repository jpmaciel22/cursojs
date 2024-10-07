function ContaBanco(agencia,conta,saldo){
this.agencia = agencia;
this.conta = conta;
this.saldo = saldo;

}

ContaBanco.prototype.sacar = function(valor){
    if(this.saldo < valor) {
    console.log(`Saldo Insuficente. || Saldo atual: R$${this.saldo}`)   
        return;
    }

    this.saldo -= valor;
    console.log(`Você sacou: R$${valor.toFixed(2)}, agora seu saldo é de: R$${this.saldo.toFixed(2)}`);
};
ContaBanco.prototype.depositar = function(valor){
this.saldo+= valor;
console.log(`Você depositou: R$${valor.toFixed(2)}, agora seu saldo é de: R$${this.saldo.toFixed(2)}`);
};
ContaBanco.prototype.verSaldo = function(
){
    console.log(`Agência: ${this.agencia}, Conta: ${this.conta}
Saldo: R$${this.saldo.toFixed(2)}`);
};

function ContaCorrente(agencia,conta,saldo,limite){
    ContaBanco.call(this,agencia,conta,saldo);
    this.limite = limite;

}

ContaCorrente.prototype = Object.create(ContaBanco.prototype);
ContaCorrente.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor){
    if((this.saldo + this.limite) < valor) {
        console.log(`Saldo Insuficente. || Saldo atual: R$${this.saldo}`)   
            return;
        }
    
        this.saldo -= valor;
        console.log(`Você sacou: R$${valor.toFixed(2)}, agora seu saldo é de: R$${this.saldo.toFixed(2)}`);
}

function ContaPoupanca(agencia,conta,saldo){
    ContaBanco.call(this,agencia,conta,saldo);
}

ContaPoupanca.prototype = Object.create(ContaBanco.prototype);
ContaPoupanca.constructor = ContaPoupanca;



const conta1 = new ContaBanco('Itaú','3301165',258.90)
const CC = new ContaCorrente('Bradesco','1588187',1000,5000)
const OitudoBem = new ContaPoupanca('OI',)
conta1.depositar(583769);
conta1.sacar(130000)
conta1.sacar(10000000000)
CC.sacar(6000)
CC.sacar(1)
CC.depositar(10)