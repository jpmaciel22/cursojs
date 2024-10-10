numero = 13
primalidade = 0
for i in range(2,13):
    if numero % i == 0:
        primalidade = 0
        break
    else: 
        primalidade = 1
if (primalidade == 1):
    print('É primo')
elif (primalidade == 0):
    print('Não é primo')