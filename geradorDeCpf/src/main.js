import GeraCpf from './modules/GeraCpf';
import './assets/css/style.css';
import CpfValidacao from './modules/CpfValidacao';
const botaoGerador = document.querySelector('.botao-gerar')
const botaoValidar = document.querySelector('.botao-validar')
const inputCpf = document.querySelector('.cpf-validar')
botaoGerador.addEventListener('click',evento => {
    evento.preventDefault();
    const gera = new GeraCpf();
    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerHTML = gera.geraNovoCpf();
})
botaoValidar.addEventListener('click',evento =>{
    evento.preventDefault();
    const validar = new CpfValidacao(inputCpf.value);
    let valid = true;
    validou(valid);
    if(!validar.validacao()){
        valid = false;
        validou(valid)
    }
})
function validou(valid){
    const divValidou = document.querySelector('.resultado');
    if(valid){
        divValidou.innerHTML = 'CPF Válido.';
        divValidou.classList.add('validou')
        divValidou.classList.remove('nao-validou')
    }
    if(valid == false){
        divValidou.innerHTML = 'CPF Inválido.';
        divValidou.classList.add('nao-validou')
        divValidou.classList.remove('validou')
    }
}
