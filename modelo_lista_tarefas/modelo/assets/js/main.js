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
});

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
    saveTaskList();
    }
})

function saveTaskList(){
    const liDeTarefas = tarefas.querySelectorAll('li'); // seleciona todos os 'li' dentro da 'ul' tarefas
    const listaDeTarefas = [];

    for (let i of liDeTarefas){
        let liTexto = i.innerText
        liTexto = liTexto.replace('🗑️',''); // para tirar o bug d salvar o lixinho junto do texto.
        listaDeTarefas.push(liTexto); // fazemos isso para salvar o texto de cada um dos li neste array
        // este for foi basicamente uma desestruturalizacao para poder salvar o texto de cada um dos li
    }

    const liTextosJSON = JSON.stringify(listaDeTarefas); // isto serve para salvar este array
    // listaDeTarefas em um JSON, que transforma em uma string direta que pode ser convertida novamente
    // em um array para a página.
    localStorage.setItem('tarefas',liTextosJSON); // aqui você salva em um storage do navegador
    //  a string transformada de JSON que pode ser convertida novamente em array, é salva com o nome tarefas.
    // pode ser vista em inspecionar , application e LOCAL STORAGE.
}
function saveLocalStorage(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas); // converte novamente de string para o array.
    for (i of listaDeTarefas){
        criaTarefa(i);
    }
} // captura os dados salvos em localstorage na string , e os mostra novamente quando aberto o site.
saveLocalStorage();

// tentativa minha que deu certo de criar tarefas:
// paragrafo = document.createElement('p');
// tarefas.appendChild(paragrafo);
// paragrafo.innerHTML = inputNewTask.value; // cria o paragrafo da tarefa