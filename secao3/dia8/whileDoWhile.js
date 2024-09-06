function random (min , max){
const r = Math.random() * (max - min) + min;    // funcao padrao de random.
return Math.floor(r);
}


let rand = random(5,50);
while(rand != 40){
    rand = random(5,50);
    console.log(rand);}

//  isso é o mesmo que: , porem o do while executa primeiro e depois checa, já o while checa e depois executa.

do{    rand = random(5,50);
    console.log(rand);}while(rand != 40)


/**roleta russa do vscode
 * function random (min , max){
const r = Math.random() * (max - min) + min;    // funcao padrao de random.
return Math.floor(r);
}


let rand = random(5,50);
while(rand != 40){
    console.log(rand);}

 so tem uma chance de acertar o numero 40 antes de travar o pc..
 */