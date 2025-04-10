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
df[df["Churn"] == 1].mean() # here it make a dataframe consisting of all the data but
# filtered by the rows of churns that are equal to 1
#result:
"""Account length            102.66
Area code                 437.82
Number vmail messages       5.12
Total day minutes         206.91
Total day calls           101.34
Total day charge           35.18
Total eve minutes         212.41
Total eve calls           100.56
Total eve charge           18.05
Total night minutes       205.23
Total night calls         100.40
Total night charge          9.24
Total intl minutes         10.70
Total intl calls            4.16
Total intl charge           2.89
Customer service calls      2.23
Churn                       1.00
dtype: float64"""

df[df["Churn"] == 1]["Total day minutes"].mean() # here it filtrates by churn 1 and showing
#from those of churn 1 only the total day minutes so the print is:
#206.91407867494814

#What is the maximum length of international calls among loyal users (Churn == 0) who do not have an international plan?
df[(df["Churn"] == 0) & (df["International plan"] == "No")]["Total intl minutes"].max()

#give us the values of the rows with index from 0 to 5 (inclusive) and columns labeled from State to Area code (inclusive)
df.loc[0:5, "State":"Area code"]

#"give us the values of the first five rows in the first three columns" (as in a typical Python slice: the maximal value is not included).
df.iloc[0:5, 0:3]
#If we need the first or the last line of the data frame, we can use the df[:1] or df[-1:] construct:
df[-1:]

df.apply(np.max) # vai criar uma serie de uma 2 colunas onde mostra em 1 o nome da coluna e na outra
# o valor maximo de cada uma.

#df.groupby(by=grouping_columns)[columns_to_show].function() << template do groupby
"""First, the groupby method divides the grouping_columns by their values. They become a new index in the resulting dataframe.
Then, columns of interest are selected (columns_to_show). If columns_to_show is not included, all non groupby clauses will be included.
Finally, one or several functions are applied to the obtained groups per selected columns."""

columns_to_show = ["Total day minutes", "Total eve minutes", "Total night minutes"]

df.groupby(["Churn"])[columns_to_show].describe(percentiles=[])

# Churn vira o index, e separa as linhas por 0 e 1 ... ja q sao seus 2 valroes... apos isso
# cria se as colunas separadas nas 3 colunas de total day minutes etc
# tem-se mais que 3 colunas apenas pq usou-se describe, entao categorizou as somas max min
# de cada um das outras 3 filtragens ( colunas ) que se pediu;


df["Total charge"] = (
    df["Total day charge"]
    + df["Total eve charge"]
    + df["Total night charge"]
    + df["Total intl charge"]
)
df.head()
# para criar uma nova coluna com a soma das outras ^^ 

# get rid of just created columns
df.drop(["Total charge", "Total calls"], axis=1, inplace=True)
# and here’s how you can delete rows
df.drop([1, 2]).head()




#https://www.kaggle.com/code/kashnitsky/topic-1-exploratory-data-analysis-with-pandas




