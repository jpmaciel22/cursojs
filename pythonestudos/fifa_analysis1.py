import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

fifa = pd.read_csv('fifa_data.csv')

### Histogramas:
intervalos = [40,50,60,70,80,90,100]

plt.hist(fifa.Overall)
# plt.hist(fifa.Overall, bins=intervalos)
plt.xlabel('Overall')
plt.xticks(intervalos)
plt.ylabel('Número de jogadores')
plt.title('ƒ = N(overall) ⊂ U = FIFA 2018')
plt.show()