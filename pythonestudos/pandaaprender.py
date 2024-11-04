import pandas as pd
BASEDEDADOS = pd.read_csv("./ramen-ratings.csv")
# print(BASEDEDADOS.head())
# print(BASEDEDADOS.loc[1:5,:]) // mostra os dados das linhas 1 a 5 com todas as colunas
# print(BASEDEDADOS.loc[(BASEDEDADOS.Brand == 'Wei Lih') & (BASEDEDADOS.Stars >= '5')])
# o .loc é utilizado para filtrar
# print(BASEDEDADOS.Stars.describe()) #faz uma analise estatistica da categoria Stars
