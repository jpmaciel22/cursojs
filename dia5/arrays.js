//  AULA 29 - ARRAYS 
const carros = [ 'BMW', 'VOLVO', 'BENZ']; // array de strings

         //         0       1      2 
const BmwEPlaca = ['320i',2017,'ABC36DJH']; // modelo, ano e placa
console.log(BmwEPlaca[1]);
console.log(BmwEPlaca.length); // tamanho do array

// uma forma prática de inserir números sempre na última casa do array 
// caso não saiba a sua quantidade é desta forma:
carros[carros.length] = 'FORD'; // foi adicionado na CASA 3. no caso a ultima,
carros[carros.length] = 'CHEVY'; // Foi adicionado na CASA 4. e assim em diante.
console.log(carros[4]); // >> CHEVY

carros.push('NISSAN') // coloca um item na última casa do array, já que é um comando de pilhas.
carros.pop(); // tira o ultimo elemento adicionado do array.
carros.unshift('TATA'); // Neste caso o elemento TATA foi adicionado para a primeira casa da lista [0].
tata = carros.shift(); // Remove o primeiro elemento de um array e retorna-o.
console.log(carros);
console.log(tata); // neste caso o TATA foi inserido no array com unshift 
// e retornado à variavel tata com shift.

// caso fosse utilizado delete carros[1]; o retorno seria a lista porem com a casa [1] vazia.
// o print seria: >> [ 'BMW', <1 empty item>, 'BENZ', 'FORD', 'CHEVY' ]

console.log(carros instanceof Array); // verifica booleanamente se carros é um array