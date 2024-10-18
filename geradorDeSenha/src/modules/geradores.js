const rand = (min,max) => {
    return Math.floor(Math.random() * (max - min) + min);
};
const geraMaiuscula = () => {
    return String.fromCharCode(rand(65,91)); // utilizamos isto pois na tabela ascii cada letra tem um codigo
}
const geraMinuscula = () => {
    return String.fromCharCode(rand(97,123));
}
const geraNumero = () => {
    return String.fromCharCode(rand(48,58));
}
const simbolos = '!@&*.-^_';
const geraSimbolo = () => {
    return simbolos[rand(0,simbolos.length)];
}
export default function geraSenha(qtd, maiusculas, minusculas, numeros, simbolos) {
    const senhaArray = [];
    qtd = Number(qtd);
    if( maiusculas == false && minusculas == false &&  numeros == false && simbolos == false){
        return undefined;
    }
    for (let i = 0; i < qtd; i++) {
        if (maiusculas) senhaArray.push(geraMaiuscula());
        if (minusculas) senhaArray.push(geraMinuscula());
        if (numeros) senhaArray.push(geraNumero());
        if (simbolos) senhaArray.push(geraSimbolo());
    }
    return senhaArray.join('').slice(0, qtd);
}

// array.sort(() => 0.5 - Math.random());