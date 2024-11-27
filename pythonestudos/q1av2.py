kg_maca = int(input('Quantos kg deseja de maçã? '))
kg_morango = int(input('Quantos kg deseja de morango? '))
totalkg = kg_maca + kg_morango
if kg_maca < 5:
    real_maca = 1.8 * kg_maca
else: real_maca = 1.5 * kg_maca
if kg_morango < 5:
    real_morango = 2.5 * kg_morango
else: real_morango = 2.2 * kg_morango

totalRs = real_morango + real_maca
if totalkg > 8 or totalRs > 25:
    totalRs = totalRs * 0.9
print(f'O total foi: R${totalRs} ')

