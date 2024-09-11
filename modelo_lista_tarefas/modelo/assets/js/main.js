const inputNewTask = document.querySelector('.inputNewTask');
const btnAddTask  = document.querySelector('.btnAddTask');
const tarefas = document.querySelector('.tarefas');

btnAddTask.addEventListener('click',function(event){
    if (!inputNewTask.value) return; // se for vazia retorna nada
    criaTarefa(inputNewTask.value);
})

inputNewTask.addEventListener('keypress', function(event){

    if(event.keyCode === 13){ // se a tecla for Enter...
        if (!inputNewTask.value) return;  // se for vazia retorna nada
        criaTarefa(inputNewTask.value);
    }
})



function criaTarefa(texto){
li = document.createElement('li');
li.innerText = texto
tarefas.appendChild(li);
btnDeleteTask(li);
limpaInput();
}

function btnDeleteTask(li){
li.innerText += '  ';
const botaoApagar = document.createElement('button');
botaoApagar.innerText = '🗑️';
botaoApagar.setAttribute('class','apagar'); // coloca a classe e diz qual a classe no botao.
li.appendChild(botaoApagar);
}


function limpaInput(){
    inputNewTask.value = '';
    inputNewTask.focus(); // para apos limpar voltar o foco para la e voce so ter que digitar
}

// tentativa minha que deu certo de criar tarefas:
// paragrafo = document.createElement('p');
// tarefas.appendChild(paragrafo);
// paragrafo.innerHTML = inputNewTask.value; // cria o paragrafo da tarefa