const produto = {
    nome: 'Produto',
    preco: 1.8,
};
const OutraCoisa = produto;

console.log(OutraCoisa); // outra coisa esta apontando para os valores de produto
//  portanto se fizermos produto.nome = 'Joao', o valor nome de OutraCoisa também mudará.
// porém ao fazermos isso o produto também é mudado caso o OutraCoisa mude, portanto nao é exatamente igual
// a ponteiros.... mas dá para entender melhor.
// para resolver isto basta um spread.
const caneca = {
    ...produto,
    material: 'porcelana',

};// isto pode ser feito também:
const caneca2 = Object.assign({},produto,{material: 'porcelana'});
//ou entao:
const caneca3 = {nome: produto.nome , preco: produto.preco, material: 'porcelana'};

for(let i of Object.entries(caneca3)){
    console.log(i[0],i[1]); // os numeros do array do lado sao para desestruturalizar
};