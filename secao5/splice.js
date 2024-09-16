//                0        1        2          3         4 
const nomes = ['Maria', 'Joao', 'Eduardo', 'Gabriel', 'Julia'];
const removidos = nomes.splice(4,1);
// splice faz com os parametros (numero inicial ( sendo ele incluso), quantidade de numeros para remover)
const adicionados = nomes.splice(4,0,'Joao') // aqui adiciona o nome 'joao' no array 4 e nao remove ninguem.
console.log(removidos);
console.log(nomes);

// para simular as outras funcoes do array fariamos:
const carros = ['BMW', 'VOLVO', 'CHEVY', 'FORD', 'TOYOTA'];
popado = carros.splice(-1,1)//a partir do ultimo numero(com ele incluso), remova 1
//pop();
pushado = carros.splice(carros.length,0,'NISSAN');
//push();
unshiftado = carros.splice(0,0,'AUDI');
//unshift();
shiftado = carros.splice(0,1);
//shift();
console.log(carros, popado,shiftado);
