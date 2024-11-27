n = int(input('Quantas temperaturas quer inserir? '))
temperaturas = []
for i in range(n):
    temperaturas.append(int(input('Insira a temperatura: '))) # temos que fazer assim
    #ja que o python nao aceita temperaturas[i], pois nao cria espaco de enderecamento
    #pra array.
maior = temperaturas[0]
menor = temperaturas[0]
soma = 0
for i in temperaturas:
    if i > maior:
        maior = i
    if i < menor:
        menor = i
    soma += i
print(f'Maior: {maior}')
print(f'Menor: {menor}')
print(f'Média: {soma/n:.2f}')