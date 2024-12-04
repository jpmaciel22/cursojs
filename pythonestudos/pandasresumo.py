import numpy as np
import pandas as pd

pd.set_option("display.precision", 2) # marca para mostrar valores float apenas 2 casas decimais.
df = pd.read_csv("gas_prices.csv") # le os dados e armazena
df.head() # mostra os 5 primeiros resultados
print(df.shape) # mostra as dimensoes do dataframe
print(df.columns) # printa as colunas, que sao meio q os tipos de dados
# as linhas os dados em si
print(df.info()) # printa informacoes gerais do dataframe com nome, numero de colunas, tipos etc
df["Australia"] = df["Australia"].astype("int64")  # muda o tipo pra int
df.describe() # mostra dados estatisticos de cada uma das colunas, transformando as linhas
# ao inves dos dados em si que tinha antes na lista transformando em soma, média, moda etc.
df.describe(include=["object", "bool"]) # para filtrar os tipos 
df["Australia"].value_counts() # para mostrar qual a distribuicao de cada valor da australia
# é interessante utilizar isso em valores booleanos
df["Australia"].value_counts(normalize=True) # pra passar os valores como porcentagem
df.sort_values(by="USA", ascending=False).head() # vai msotrar os valores em ordem crescente a partir
# dos valores da Coluna USA 
df["Australia"].mean() # media dos valores



#https://www.kaggle.com/code/kashnitsky/topic-1-exploratory-data-analysis-with-pandas




