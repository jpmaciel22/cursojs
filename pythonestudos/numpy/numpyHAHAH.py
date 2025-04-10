import numpy as np
my_matrix = [[1,2,3],[4,5,6],[7,8,9]]
print(np.array(my_matrix)) # numpy transforma em array.
np.arange(0,10) # faz um range do python, utilizado em for gearlmente, so que em array.
# resultado: [0 1 2 3 4 5 6 7 8 9]
np.arange(4,11,2)
# resultado: [4 6 8 10]
np.zeros(3)
#resultado: [0. 0. 0.]
uns = np.ones(3)
#resultado: [1. 1. 1.]
soma = 0
for i in uns:
    soma = i+soma
# soma = 3.0
np.linspace(0,2,10) #retorna 10 numeros de 0 a 2, dividos igualmente.
#resultado: [0.         0.22222222 0.44444444 0.66666667 0.88888889 1.11111111
# 1.33333333 1.55555556 1.77777778 2.        ]
np.eye(4) # resultado cria uma matriz identitaria
random = np.random.rand(2) # retorna um nuermo aleatorio de 0 a 1, nesse caso 2 ne por causa do parametro
randomint = np.random.randint(1,100,21) # aq retorna 21 inteiros aleatorios de 1 a 100
print(randomint)
print(randomint.reshape(7,3)) # aq muda o array de 21 numeros
#para uma matriz de 7 linhas e 3 colunas.
randomint.max() # retorna o maior
randomint.min() #retorna o menor
randomint.argmax() #retorna o index do maior
randomint.argmin() #retorna o index do menor
randomint.shape #retorna o formato do array/matriz sendo este um atributo e nao funcao.
arr = np.arange(0,11)
arr[0:5]=100
#resultado: [100,100,100,100,100,5,6,7,8,9..]
slice_of_arr = arr[0:6]
slice_of_arr[:]=99 # muda tudo do array pra 99
#isso muda também os numeros no 'arr' de 0 a 6, já que o slice_of_arr
#nao é uma copia mas sim uma referencia aqle array.
#para copiar:
arr_copy = arr.copy()
arr_2d = np.array(([5,10,15],[20,25,30],[35,40,45]))
# a oredm para invocar uma posicao é arr_2d[linha][coluna]
arr_2d[1][0] # resultado: 20
arr_2d[:2,1:] # resultado: array([[10, 15],
#                               [25, 30]])



# para fazer de forma mais elegante:
arr2d = np.zeros((10,10))
arr_length = arr2d.shape[0]
for i in range(arr_length):
    arr2d[i] = i
# o resultado sera uma matriz de 10x10 com linhas com os mesmos numeros de i:
# array([[0., 0., 0., 0., 0., 0., 0., 0., 0., 0.],
#        [1., 1., 1., 1., 1., 1., 1., 1., 1., 1.],
#        [2., 2., 2., 2., 2., 2., 2., 2., 2., 2.],
#        [3., 3., 3., 3., 3., 3., 3., 3., 3., 3.],
#        [4., 4., 4., 4., 4., 4., 4., 4., 4., 4.],
#        [5., 5., 5., 5., 5., 5., 5., 5., 5., 5.],
#        [6., 6., 6., 6., 6., 6., 6., 6., 6., 6.],
#        [7., 7., 7., 7., 7., 7., 7., 7., 7., 7.],
#        [8., 8., 8., 8., 8., 8., 8., 8., 8., 8.],
#        [9., 9., 9., 9., 9., 9., 9., 9., 9., 9.]])




#https://www.kaggle.com/code/legendadnan/numpy-tutorial-for-beginners-data-science/notebook
