numero = input('Insira um número menor que 1000: ')
numero_int = int(numero)
if numero_int <= 999 and numero_int >= 100:
    print(f'{numero[0]} centenas, {numero[1]} dezenas e {numero[2]} unidades.')
elif numero_int < 100 and numero_int >= 10:
    print(f'{numero[0]} dezenas e {numero[1]} unidades.')
elif numero_int < 10:
    print(f'{numero[0]} unidades.')
else:
    print('Insira um número válido.')