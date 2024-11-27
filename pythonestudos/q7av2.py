n = int(input('Insira um número primo: '))
status = 1
for i in range(2,n):
    if n % i == 0:
       status = 0
       break
# if status == 1:
#    print('É primo.')
# else:
#    print('Não é primo.')

print('É primo.') if status == 1 else print('Não é primo.')