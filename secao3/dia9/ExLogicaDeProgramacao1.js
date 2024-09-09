function maior(x,y){
return console.log((x > y) ? x : y );
}
maior(10,3);

console.log('-------------------------')

//  pode se fazer também:
const maior2 = (x,y) => x > y ? x : y;

console.log(maior2(10,20));

console.log('=================');

//  Retorne se a imagem exemplo é paisagem(largura maior) ou retrato(altura maior).

const imagem = (length,height) => length > height ? 'Paisagem' : 'Retrato';
console.log(imagem(1920,1080));