const num1 = [1,2,3];
const num2 = [4,5,6];
const num3 = num1.concat(num2, [7,8,'oi tudo bem']);
// OU
const num4 = [...num1, ...num2, 'TaLigado', ...[7,8]];
console.log(num3);
console.log(num4);