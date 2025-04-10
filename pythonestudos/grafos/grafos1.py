import matplotlib.pyplot as plt
import networkx as nx

#cria grafo vazio.
G = nx.Graph()

#Adicionar vertices
G.add_node('v1')
G.add_node('v2')
G.add_node('v3')
G.add_node('v4')
G.add_node('v5')

#Adicionar arestas
G.add_edge('v1','v2')
G.add_edge('v2','v3')
G.add_edge('v3','v4')
G.add_edge('v4','v5')
G.add_edge('v5','v1')

# Lista os vertices
print('lista de vertices')
print(G.nodes())

#for nos vertices.
print('percorrendo os vertices')
for v in G.nodes():
    print(v)

#for nas arestas
for a in G.edges():
    print(a)

#lista de graus
print('lista de graus')
print(G.degree())

#acessar o grau de um específico:
print('O grau de v2 é:', G.degree()['v2']) # ou seja é um dicionario.

#grafo como lista de adjacencia 
print(G['v1'])

#print na matriz de adjacencia
A = nx.adjacency_matrix(G)
print(A.todense())

# Adiciona um campo peso em cada aresta do grafo
G['v1']['v2']['peso'] = 5
G['v2']['v3']['peso'] = 10
G['v3']['v4']['peso'] = 2
G['v4']['v5']['peso'] = 8
G['v5']['v1']['peso'] = 4 

# Lista cada aresta e seus respectivos pesos
print('Adicionando pesos as arestas')
for edge in G.edges():
    u = edge[0]
    v = edge[1]
    print('O peso da aresta', edge, 'vale ', G[u][v]['peso'])

#usar o matplot para mostrar o grafo como imagem:
plt.figure('Grafos')
nx.draw_networkx(G, pos=nx.spring_layout(G), with_labels=True)
plt.show()

#com grafos direcionados:
GD = nx.DiGraph()
nodes = ['João', 'Manoel', 'Kauã', 'Natã', 'Kleberton']
GD.add_nodes_from(nodes)
edges = [('João', 'Manoel'), ('Kauã', 'Manoel'), ('João', 'Natã'), ('Kleberton', 'João'), ('Manoel', 'João')]
GD.add_edges_from(edges)

plt.figure('Grafos Direcionados', figsize=(10,6))
# nx.draw_networkx(GD, pos=nx.spring_layout(GD), with_labels=True)
nx.draw_networkx(GD, pos=nx.kamada_kawai_layout(GD), with_labels=True, node_size=1000, node_color='skyblue', font_size=16,)
plt.show()
