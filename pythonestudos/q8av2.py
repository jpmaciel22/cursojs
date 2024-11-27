n = int(input('Insira um número primo: '))
primos = []

for i in range(2,n+1):
    status = 1
    for j in range(2,i):
        if i % j == 0:
            status = 0
            break
    if status == 1:
        primos.append(i)
print(primos)