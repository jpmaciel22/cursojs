function rand(min = 1000, max = 3000) {
  const num = Math.random() * (max - min) +
    min;
  return Math.floor(num);
}

function f1(callback) {
  setTimeout(function() {
    console.log('f1');
    if (callback) callback();
  }, rand());
}
 //este settimeout esta sendo usado apenas para simular demoras randomicas, para assim as funcoes serem
//  executadas de forma randomica ( sem o callback ), o callback resolve este problema ordenando a execucao.

function f2(callback) {
  setTimeout(function() {
    console.log('f2');
    if (callback) callback();
  }, rand());
}

function f3(callback) {
  setTimeout(function() {
    console.log('f3');
    if (callback) callback();
  }, rand());
}

f1(f1Callback);

function f1Callback() {
  f2(f2Callback);
}

function f2Callback() {
  f3(f3Callback);
}

function f3Callback() {
  console.log('Olá mundo!');
}


//  neste caso se voce fizer uma funcao que chame outra funcao para ser executada elas se chamarao em ordem 
// e serao executadas em ordem , independente de quem rode mais rapido.

// isto poderia ser feito com :
f1(function(){
  f2(function(){
    f3(function(){
      console.log('Olá mundo.');
    })
  })
})