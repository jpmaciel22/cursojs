#forma certa abaixo
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

#forma burra abaixo
n = int(input('Insira o número de temperaturas que quer inserir: '))
temperaturas = [0] * n # substituto burro de .append
maior = None
menor = None
for i in range(n):
    temperaturas[i] = int(input('Insira as temperaturas: '))
    if maior is None or temperaturas[i] > maior:
        maior = temperaturas[i]
    if menor is None or temperaturas[i] < menor:
        menor = temperaturas[i]
soma = sum(temperaturas)
media = soma/n
print(temperaturas)
print(f'Menor: {menor}')
print(f'Maior: {maior}')
print(f'Média: {media:.2f}')
