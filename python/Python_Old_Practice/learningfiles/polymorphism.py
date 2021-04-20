# age: int = 4
# print(age)
# age: str = "morsalin"
# print(age)


# def taken(a: str, b: str, times: int) -> str:
#     return (a+b)*times


# print(type(taken(6, 6, 6)))

# age: int = "morsalin"
# print(age)

# print("y=%d")

# maindata = {
#     "data": "morsalin"
# }
# print(maindata)


# bonus = 0.0
# currentyear = int(input("Enter current year: "))

# yearofjoining = int(input("Enter year of joining: "))

# yearofservice = currentyear - yearofjoining

# if(yearofservice > 2): 
#     bonus = 1500
#     print("Bonus - %d" % bonus)
#     print("Congratulations! We are able to provide you a bonus o % d" % bonus)


import functools
from functools import reduce


result = reduce(lambda x,y:x+y,[1,2,3,4,5])

print(result)