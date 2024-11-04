import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
BASEDEDADOS = pd.read_csv("./ramen-ratings.csv")
# print(BASEDEDADOS.head())
# print(BASEDEDADOS.loc[1:5,:]) # mostra os dados das linhas 1 a 5 com todas as colunas
# print(BASEDEDADOS.loc[(BASEDEDADOS.Brand == 'Wei Lih') & (BASEDEDADOS.Stars >= '5')])
# o .loc é utilizado para filtrar
# print(BASEDEDADOS.Stars.describe()) #faz uma analise estatistica da categoria Stars
# print(BASEDEDADOS.Stars.unique()) #printa apenas as estrelinhas unicas
plt.plot(BASEDEDADOS.Brand == 'Nissin', BASEDEDADOS.Stars);
plt.title('Relacao entre Nissin e Estrelas');
plt.xlabel('Nissin')
plt.ylabel('Estrelas')
plt.show()


