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
    saveTaskList();
}

function btnDeleteTask(li){
    li.innerText += '  ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = '🗑️';
    botaoApagar.setAttribute('class','apagar'); // coloca a classe e diz qual a classe no botao.
    // também pode ser feito com botaoApagar.classList.add('apagar');
    li.appendChild(botaoApagar);
}


function limpaInput(){
    inputNewTask.value = '';
    inputNewTask.focus(); // para apos limpar voltar o foco para la e voce so ter que digitar
}


document.addEventListener('click',function(event){
    const elemento = event.target; // para pegar no evento exatamente onde esta sendo clicado.
    if (elemento.classList.contains('apagar')){ // se neste elemento clicado do evento 
     // tiver a na sua lista de classes a classe apagar, ele executara esta funcao
    elemento.parentElement.remove(); // com esta funcao ele acha no atributo parentElement o 
    // ''pai'' deste elemento, no caso os 'li' criados, já que os buttons sao child. 
    }
})

function saveTaskList(){
    const liDeTarefas = tarefas.querySelectorAll('li'); // seleciona todos os 'li' dentro da 'ul' tarefas
// é o exercicio de nodelist e domtags.
    const listaDeTarefas = [];
    for (let i of liDeTarefas){
        let liTexto = i.innerText
        liTexto = liTexto.replace('🗑️',''); // para tirar o bug d salvar o lixinho junto do texto.
    }
}


// tentativa minha que deu certo de criar tarefas:
// paragrafo = document.createElement('p');
// tarefas.appendChild(paragrafo);
// paragrafo.innerHTML = inputNewTask.value; // cria o paragrafo da tarefa