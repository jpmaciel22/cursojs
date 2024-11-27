ano = int(input('Insira aqui o ano para checagem: '))
if ano % 100 == 0 and ano % 400 == 0:
    print('É bissexto.')
elif ano % 100 != 0 and ano % 4 == 0:
    print('É bissexto.')
else:
    print('Não é bissexto.')