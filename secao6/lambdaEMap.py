def my_map(func,nums):
    result = []
    for i in nums:
        new_item = func(i)
        result.append(new_item)
    return result

nums = [1,2,3,4,5]
cubed = my_map(lambda x: x**3,nums)
print(cubed)
cubed2 = list(map(lambda x: x**3,nums))
print(f'Com map:{cubed2}')

