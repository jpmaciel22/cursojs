n = int(input('Insira um número primo: '))
primos = []

for i in range(2,n+1): # pegamos 5 por exemplo, o +1 para ir ate 6 e assim fazer de 2 a 5 e incluir ele.
    status = 1
    for j in range(2,i): # aq comeca com 2, da errado, dps vira 3, da errado, dps 4 da errado e acaba
        if i % j == 0: # pois o 5 nao é incluso na divisao e é adicionado aos primos.
            status = 0
            break
    if status == 1:
        primos.append(i)
print(primos)

#com 2 nao da errado pq ele nao chega a executar, ja que fica range(2,2), 
# por isso o status dentro do laço e ai ele é adicionado aos primos.