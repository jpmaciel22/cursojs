lista = [12,11,10,9,8,7,80,71,80]
maior = 0 
for i in lista:
    if i > maior:
        segundo = maior
        maior = i
    elif i > segundo and i != maior:
        segundo = i
print(f'Maior: {maior}, Segundo: {segundo}')
