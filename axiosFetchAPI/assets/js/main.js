fetch('assets/json/pessoas.json')
.then(response => response.json())
.then(json => pageElementsLoad(json));

function pageElementsLoad(json){
    const table = document.createElement('table');
for(let i of json){
    console.log(i.nome)
}
}
