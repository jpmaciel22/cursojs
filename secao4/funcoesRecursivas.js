function recursiva(max){
    if (max == 10) return;
max++;
console.log(max)
recursiva(max)
}
recursiva(-20);
// a funcao se chama passando novamente o parametro ate dar o return.
