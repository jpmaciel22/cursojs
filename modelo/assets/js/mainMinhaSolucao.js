function funcaoDefault(){
    const form = document.querySelector('#form'); 
    let resultado = document.querySelector('.resultado');
    function recebeEventoForm(evento) {
        evento.preventDefault(); // previne o comportamento default do navegador de dar refresh
        // na pagina. o evento é passado como parametro para execução da funcao ao ser chamado embaixo no
        // addEventListener.
        const peso = form.querySelector('#peso');
        const pesoToNumber = parseFloat(peso.value);
        const altura = form.querySelector('#altura');
        const alturaToNumber = parseFloat(altura.value);
        let imc = pesoToNumber / (alturaToNumber * alturaToNumber);
        imc = imc.toFixed(2);

        if(18,5 > imc ){
        resultado.innerHTML =`<p>Seu imc é: ${imc}. Você está abaixo do peso.</p>`
        }

        else if(18,5 <= imc && imc < 25 ){
            resultado.innerHTML =`<p>Seu imc é :${imc}. Você está com peso normal.</p>`
            }
        
        else if(25 <= imc && imc < 30 ){
                resultado.innerHTML =`<p>Seu imc é: ${imc}. Você está com sobrepeso.</p>`
                }
        else if(30 <= imc && imc < 34 ){
                    resultado.innerHTML =`<p>Seu imc é: ${imc}. Você está com obesidade grau 1.</p>`
                    }        
        else if(30 <= imc && imc < 34 ){
                        resultado.innerHTML =`<p>Seu imc é: ${imc}. Você está com obesidade grau 2.</p>`
                        } 
        else if(35 <= imc && imc < 40 ){
                            resultado.innerHTML =`<p>Seu imc é: ${imc}. Você está com obesidade grau 2.</p>`
                            } 
        else if(imc >= 40 ){
                                resultado.innerHTML =`<p>Seu imc é: ${imc}. Você está com obesidade grau 3.</p>`
                                } 
        else{
            resultado.innerHTML =`<p>Peso e altura inválidos.</p>`
        }

}
form.addEventListener('submit', recebeEventoForm); // quando acontecer o evento SUBMIT ele executará 
// a função recebeEventoForm
}

funcaoDefault();