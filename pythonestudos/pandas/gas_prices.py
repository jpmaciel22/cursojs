import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

gas = pd.read_csv('gas_prices.csv')
plt.figure(figsize=(6,5)) # determina o tamanho do grafico
print(gas['Australia'])
plt.title('Preço da gasolina ao longo do tempo ( USD )' , fontdict={'fontweight':'bold'})

#jeito rapido de fazer abaixo...:
for i in gas:
    if i != 'Year':
        plt.plot(gas.Year, gas[i], marker='.', label=i)
        plt.xticks(gas.Year[::2])

plt.xlabel('Ano')
plt.ylabel('Preço da gasolina')
plt.legend()

plt.show()

# o b.- define cor e que tem pontos na linha..
# b de blue e o . de o simbolo ponto... r>- faz um vermelho cheio de setas.. se mudarmos para r>: fica 
# pontilhado etc...
# plt.xticks(gas.Year[::2]) # aq é como o iloc, colocamos para pular de 2 em 2 anos.
# plt.plot(gas['Year'], gas['Australia'], label="Australia") # you can do it both ways

