// fetch('assets/json/pessoas.json')
// .then(response => response.json())
// .then(json => pageElementsLoad(json));

axios('assets/json/pessoas.json')
.then(resposta => pageElementsLoad(resposta.data));

function pageElementsLoad(json){
    const table = document.createElement('table');
for(let i of json){
    const tr = document.createElement('tr');

    let td1 = document.createElement('td');
    td1.innerHTML = i.nome 
    tr.appendChild(td1)
    let td2 = document.createElement('td');
    td2.innerHTML = i.idade
    tr.appendChild(td2)
    let td3 = document.createElement('td');
    td3.innerHTML = i.salario
    tr.appendChild(td3) 
    table.appendChild(tr)
}
const resultado = document.querySelector('.resultado');
resultado.appendChild(table)
}
