export const nome = 'Joao';
export const idade = 19;
export const sobrenome = 'Maciel';
const cpf = 'Oi tudo bem'; // essas variaveis sao basicamente privadas.
// ja que o que nao for exportado continuará privado e so oq for exportado fica publico
export function soma(x,y){
    return x+y;
};

export class Pessoa{
    constructor(nome,sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}
// export { nome , sobrenome , idade, soma };