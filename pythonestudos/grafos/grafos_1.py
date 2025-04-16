def iniciar_matriz_adjacente(matriz,v, u):
    for i in range(v):
        matriz.append([0] * u)
    return matriz

def adiciona_vertice(matriz, v, u):
    matriz[v-1][u-1] = 1
    matriz[u-1][v-1] = 1
    return matriz

def inicia_lista_adjacente(v):
    return {i: [] for i in range(1, v+1)}

def adicionar_na_lista(lista_adj, v, u):
    lista_adj[v].append(u)
    lista_adj[u].append(v)
    return lista_adj

def retorna_grau(matriz):
  for i in range(len(matriz)):
    print(len(matriz[i+1]))

def esta_completo(matriz):
    for i in range(len(matriz)):
        if(len(matriz[i+1])!= len(matriz)-1):
            status = 0
    if(status == 0):
        print('Não é completo.')
    else: print('Grafo completo.')

def achar_predecessores(matriz,v):
    for i in matriz:
        if(v in matriz[i]):
            print(f'Predecessor de {v}: {i}')

def achar_isolados(matriz,v):
    for i in matriz:
        if(v not in matriz[i]):
            status = 0
    if(status == 0):
        print('Vertice isolado')
    else: print('Vertice não é isolado.')

def checaEuleriano(matriz):
    for i in range(len(matriz)):
        if(len(matriz[i+1]) % 2 != 0):
            return False

# Criando a matriz de adjacência e a lista de adjacência
matriz = []
matriz = iniciar_matriz_adjacente(matriz,5, 5)
adiciona_vertice(matriz, 1, 2)

lista_adjacente = inicia_lista_adjacente(5)
adicionar_na_lista(lista_adjacente, 1, 2)
adicionar_na_lista(lista_adjacente, 3, 2)

# print(retorna_grau(lista_adjacente))

# print(esta_completo(lista_adjacente))

achar_predecessores(lista_adjacente,2)

print("Lista de Adjacência:", lista_adjacente)
print("Matriz de Adjacência:")
for linha in matriz:
    print(linha)