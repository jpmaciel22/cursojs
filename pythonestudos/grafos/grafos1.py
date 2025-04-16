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
GP = nx.Graph()
GP.add_nodes_from(["R. Mariano Procópio 37", "R. Voluntários da Pátria", "R. Arnaldo Quintela 70", "A. Bandeirantes", "Vanilson Dog"])
GP.add_edge('R. Mariano Procópio 37', 'R. Voluntários da Pátria', weight=5)
GP.add_edge('R. Voluntários da Pátria 450', 'R. Arnaldo Quintela 303', weight=10)
GP.add_edge('R. Arnaldo Quintela 70', 'A. Bandeirantes', weight=2)
GP.add_edge('A. Bandeirantes', 'A. Presidente Vargas 10', weight=8)
GP.add_edge('Vanilson Dog', 'R. Mariano Procópio 3', weight=4)

# Lista cada aresta e seus respectivos pesos
print('Adicionando pesos as arestas')
for edge in GP.edges():
    u = edge[0]
    v = edge[1]
    print('O peso da aresta', edge, 'vale ', GP[u][v]['weight'])

#usar o matplot para mostrar o grafo como imagem:
plt.figure('Grafos')
nx.draw_networkx(G, pos=nx.spring_layout(G), with_labels=True)
plt.show()

#com grafos direcionados:
GD = nx.DiGraph()
usuarios = ["usuario1", "usuario2", "usuario3"]
GD.add_nodes_from(usuarios, bipartite=0)
cursos = ["Python", "SQL", "Machine Learning"]
GD.add_nodes_from(cursos, bipartite=1)
matriculas = [
    ("usuario1", "Python"),
    ("usuario1", "SQL"),
    ("usuario2", "SQL"),
    ("usuario2", "Machine Learning"),
    ("usuario3", "Python")
]

GD.add_edges_from(matriculas)

plt.figure('Grafos Direcionados', figsize=(10,6))
# nx.draw_networkx(GD, pos=nx.spring_layout(GD), with_labels=True)
nx.draw_networkx(GD, pos=nx.kamada_kawai_layout(GD), with_labels=True, node_size=1000, node_color='skyblue', font_size=16,)
plt.show()


pos = nx.spring_layout(GP, seed=42)
nx.draw(GP, pos, with_labels=True, node_color='skyblue', node_size=1500, font_size=16)
edge_labels = nx.get_edge_attributes(GP, 'weight')
nx.draw_networkx_edge_labels(GP, pos, edge_labels=edge_labels)
plt.show()