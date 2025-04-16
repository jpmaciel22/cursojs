import networkx as nx
import matplotlib.pyplot as plt

G = nx.Graph()

# Adicionando os nós (endereços reais que vão aparecer no grafo)
G.add_nodes_from([
    'A','B','C','D'
])

# Arestas com pesos e nomes CORRETOS
G.add_edges_from([
    (1, 2), (1, 3),         
    (2, 3), (2, 4), (2, 5), 
    (3, 5), (3, 4),         
    (4, 5),                 
    (5, 1)                  
])

# Plot do grafo
pos = nx.spring_layout(G, seed=42)
plt.figure(figsize=(10,6))  # <-- Esse plt.figure tem que vir ANTES do draw!
nx.draw(G, pos, with_labels=True, node_color='skyblue', node_size=1500, font_size=10)
labels = nx.get_edge_attributes(G, 'weight')
nx.draw_networkx_edge_labels(G, pos, edge_labels=labels)
plt.title("Sistema de aplicativo transporte")
plt.show()



import networkx as nx
import matplotlib.pyplot as plt

GX = nx.DiGraph()
GX.add_nodes_from([
    1,2,3,4,'A','B','C','D'
])
GX.add_edge(1,2)
GX.add_edge(2,3)
GX.add_edge(3,4)
GX.add_edge(4,1)
GX.add_edge('A','B')
GX.add_edge('B','C')
GX.add_edge('C','D')
GX.add_edge('D','A')
pos = nx.spring_layout(GX, seed=42)
plt.figure(figsize=(5,5))
nx.draw(GX, pos, with_labels=True, node_color='skyblue', node_size=1500, font_size=10)
labels = nx.get_edge_attributes(GX, 'weight')
nx.draw_networkx_edge_labels(GX, pos, edge_labels=labels)
plt.title("Grafos Isomorfos")
plt.show()