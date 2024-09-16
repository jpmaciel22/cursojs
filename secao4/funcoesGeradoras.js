function* geradora1() { // utiliza-se o asterisco para caracterizar uma funcao geradora
yield 'valor 1';
yield 'valor 2';
yield 'valor 3';
} 
const g1 = geradora1();
console.log(g1.next().value); // valor 1 done:false
console.log(g1.next().value); // valor 2 done:false
console.log(g1.next().value); // valor 3 done:false
console.log(g1.next().value); // value:undefined done:true , ele percebe que acabou os yields.


// for (let i of g1){
//     console.log(i);
// }


function* contador(){
    let i = 0;
    while(true){
        yield i;
        i++;
    }
}
const c = contador();
console.log(c.next().value); // 0   
console.log(c.next().value); // 1
console.log(c.next().value); // 2
console.log(c.next().value); // 3
console.log(c.next().value); // 4
console.log(c.next().value); // 5
console.log(c.next().value); // 6
console.log(c.next().done); // retorna o done


function* geradora3(){
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4(){
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();
for(let i of g4){
    console.log(i)
}

function* geradora5(){
    yield function(){
        console.log('oi td bem');
    }

    return function(){
        console.log('oi vim do return');
    }

    yield function(){
        console.log('oieee'); // nao serei executado.
    }
}
const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
func1();
func2();
// func3(); isso daria problema pois nao há o 3 ja que o return para o fluxo dos yields e é o ultimo.