import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
BASEDEDADOS = pd.read_csv("./winemag-data-130k-v2.csv")
# print(BASEDEDADOS.head())
# print(BASEDEDADOS.loc[1:5,:]) # mostra os dados das linhas 1 a 5 com todas as colunas
# print(BASEDEDADOS.loc[(BASEDEDADOS.Brand == 'Wei Lih') & (BASEDEDADOS.Stars >= '5')])
# o .loc é utilizado para filtrar
# print(BASEDEDADOS.Stars.describe()) #faz uma analise estatistica da categoria Stars
# print(BASEDEDADOS.Stars.unique()) #printa apenas as estrelinhas unicas
# BASEDEDADOS.groupby('points').points.count()
# BASEDEDADOS.groupby('points').price.min()

BASEDEDADOS.groupby(['country', 'province']).apply(lambda df: df.loc[df.points.idxmax()]).reset_index(drop=True)
# o comando acima separa por grupos de paises e provincias, e nos dados grupos criados, tenta localizar
# a partir do array o objeto que tiver o maixmo de pontos nesse indice ( pontos ), portanto
# ele localiza o melhor vinho dentro de cada grupo de cada provincia e país. 

# plt.plot(BASEDEDADOS.price, BASEDEDADOS.points);
# plt.title('Relacao entre preço e pontos');
# plt.xlabel('Price')
# plt.ylabel('Points')
# plt.show()

#Maneira mais manual abaixo:
# plt.plot(gas.Year, gas.USA, '.-', label="USA") # o b.- define cor e que tem pontos na linha..
# b de blue e o . de o simbolo ponto... r>- faz um vermelho cheio de setas.. se mudarmos para r>: fica 
# pontilhado etc...
# plt.xticks(gas.Year[::2]) # aq é como o iloc, colocamos para pular de 2 em 2 anos.
# plt.plot(gas['Year'], gas['Australia'], label="Australia") # you can do it both ways




