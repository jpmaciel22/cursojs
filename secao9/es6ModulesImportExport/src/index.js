// import { nome as nomeimportado } from './modulo1';
// import { sobrenome } from './modulo1'
// import { soma } from './modulo1'
// import { idade, Pessoa } from './modulo1'
import * as ModuloImportado from './modulo1';
const p1 = new ModuloImportado.Pessoa('Joao','Aquino');

console.log(ModuloImportado.nome, ModuloImportado.sobrenome, ModuloImportado.idade);
console.log(ModuloImportado.soma(2,2));
console.log(p1);