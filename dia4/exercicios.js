const numero = Number(prompt('Digite um numero: ')); // o Number() faz com que o número certificadamente seja
// de valor number ao invés de ser promptado como uma string.
const numeroTitulo = document.getElementById('texto-titulo');
const texto = document.getElementById('texto');
numeroTitulo.innerHTML = '';
numeroTitulo.innerHTML = numero;

texto.innerHTML=''; // usado para limpar a página antes e depois carregar

texto.innerHTML += `<p>A raiz quadrada do seu número é: <strong>${numero ** (1/2)}</p>`;
texto.innerHTML += `<p>É seu número inteiro?:<strong>${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>É seu número NaN?:<strong>${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>Seu número arredondado para baixo:<strong>${Math.floor(numero)}</p> `;
texto.innerHTML += `<p>Seu número arredondado para cima:<strong>${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Seu número com duas casas decimais:<strong>${numero.toFixed(2)}</p>`;