data = input('Insira uma data no formato "dd/mm/AAAA": ')
data_form = data.split('/')
print(data_form)
dia = int(data_form[0])
mes = int(data_form[1])
ano = int(data_form[2])
mes31 = [1,3,5,7,8,10,12]
mes30 = [4,6,9,11]
fevereiro = 2
def eBissexto(ano):
    if ano % 100 == 0 and ano % 400 == 0:
        return 1
    elif ano % 100 != 0 and ano % 4 == 0:
        return 1
    else:
        return 0

if mes in mes31 and dia > 31:
    print('Insira uma data válida.')
elif mes in mes30 and dia > 30:
    print('Insira uma data válida.')
elif mes > 12:
    print('Insira uma data válida.')
elif mes == 2 and eBissexto(ano) == 1 and dia > 29:
    print('Insira uma data válida.')
elif mes == 2 and eBissexto(ano) == 0 and dia > 28:
    print('Insira uma data válida')
else:
    print('Data válida.')