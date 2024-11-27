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






#https://www.kaggle.com/code/legendadnan/numpy-tutorial-for-beginners-data-science/notebook
