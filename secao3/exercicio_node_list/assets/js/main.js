const paragrafos = document.querySelector('.paragrafos')
const pObjetos = paragrafos.querySelectorAll('p');
const stylesBody = getComputedStyle(document.body); // pega os styles que estão atribuidos ao body.
const backgroundstylesBody = stylesBody.backgroundColor; // pega especificamente o atributo background-color
//  que estava atribuido dentro de todos os elementos atribuidos ao document.body
//  como se fosse uma desestruturalizacao do document.body
for (let i of pObjetos){

    i.style.backgroundColor = backgroundstylesBody;
    i.style.color = '#FFFFFF' // mudando a cor da fonte para branco.
    // este comando é um for para cada objeto paragrafo de pElementos, mudando o atributo 
    //  backgroundColor de cada um dos objetos ''p'' dentro de pElementos.
}
 // para mudar o texto de cada um deles de uma vez só seria algo tipo:
 // for(let i in pElementos){
 // pElementos[i].innerHTML = 'oi td bem';} 

 let container = document.querySelector('.container');
 let h1 = container.querySelector('h1');
 h1.style.fontFamily = 'Verdana';