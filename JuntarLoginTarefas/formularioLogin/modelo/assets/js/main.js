class ValidarFormulario{
    constructor(){
        this.formulario = document.querySelector('.formulario');
        this.button = this.formulario.querySelector('button')
        this.eventos();
    }
    eventos(){
        this.formulario.addEventListener('submit',(evento) => { // aqui usamos arrow function para previnir de 
            //mudar o this
            evento.preventDefault(); // previne o reinicio da pagina
            const camposValidos = this.camposIsValid(); 
            const senhasValidas = this.senhasIsValid();

            if(camposValidos && senhasValidas){
                this.button.onclick = () =>{
                    location.href = "../../modelo_lista_tarefas/modelo/index.html";
                }
            }
        });
    }

    camposIsValid(){
        let valid = true;

        for(let i of this.formulario.querySelectorAll('.mensagem-de-erro')){
           i.remove();
        }
        
        for(let i of this.formulario.querySelectorAll('.validar')){
            if(!i.value){
                const label = i.previousElementSibling.innerText;
                this.CriaErro(i,`O campo ${label} não pode estar vazio.`);
                valid = false
            }

            if(i.classList.contains('cpf')){
                const cpf = new CpfValidacao(i.value);
                if(!cpf.validacao()){this.CriaErro(i, 'CPF Inválido'); valid = false}
            }

            if(i.classList.contains('usuario')){
                if(i.value.length < 3 || i.value.length > 12){
                    const label = i.previousElementSibling.innerText;
                    this.CriaErro(i,`O campo ${label} tem que conter entre 3 e 12 caracteres.`)
                    valid = false;
                }
                if(!this.onlyLettersAndNumbers(i.value)){ // isso testa se tem apenas letras e numeros
                    const label = i.previousElementSibling.innerText;
                    this.CriaErro(i,`O campo ${label} tem que conter apenas números e letras.`)
                    valid = false;
                }
            }
            if(i.classList.contains('senha')){
                if(i.value.length < 6 || i.value.length > 12){
                    const label = i.previousElementSibling.innerText;
                    this.CriaErro(i,`O campo ${label} tem que conter entre 6 e 12 caracteres.`)
                    valid = false;
                }
            }
            if(i.classList.contains('repetir-senha')){
                if(i.value.length < 6 || i.value.length > 12){
                    const label = i.previousElementSibling.innerText;
                    this.CriaErro(i,`O campo ${label} tem que conter entre 6 e 12 caracteres.`)
                    valid = false;
                }
            }
        }
        return valid;
    }

    CriaErro(campo , msg){
        const div = document.createElement('div');
        const br = document.createElement('br');
        div.innerHTML = msg;
        div.classList.add('mensagem-de-erro');
        br.classList.add('mensagem-de-erro')
        campo.insertAdjacentElement('afterend',div) // insere logo após o elemento campo a div.
        div.insertAdjacentElement('afterend',br);
        }
    onlyLettersAndNumbers(str) {
            return /^[A-Za-z0-9]*$/.test(str);
        }

    senhasIsValid(){
        let valid = true;
        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');

        if(repetirSenha.value !== senha.value){
            this.CriaErro(senha,`Os campos senha e repetir senha tem que ser iguais.`)
            this.CriaErro(repetirSenha,`Os campos senha e repetir senha tem que ser iguais.`)
            valid = false;
        }
        return valid;
    }
}
const valida = new ValidarFormulario();