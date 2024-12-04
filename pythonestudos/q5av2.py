#forma burra 1
n = [0,0,0]
soma = 0
for i in range(0,3):
    n[i] = int(input('Insira a nota do aluno.'))
    soma += n[i]
if soma/3 < 7:
    print('Reprovado.')
elif soma/3 >= 7 and soma/3 < 10:
    print('Aprovado.')
elif soma/3 == 10:
    print('Aprovado com distinção.')

#forma certa abaixo:
n = []
soma = 0
for i in range(3):
    n.append(int(input('Insira a nota do aluno: ')))
soma = sum(n)
media = soma / 3  # Calcula a média
if media < 7:
    print('Reprovado.')
elif media < 10:
    print('Aprovado.')
else:
    print('Aprovado com distinção.')