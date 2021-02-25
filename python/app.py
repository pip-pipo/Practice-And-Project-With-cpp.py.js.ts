# def main():
#     return 'hello'
# main()

# x =10 
# y =320

# print(id(x)+id(y))
# z = x!=y
# print(z)

# a = [0]*10
# print(a)

# a = [10]*4
# print(a)


# # initializing string  
# test_string = "geekforgeeksf"
  
# # printing original string  
# print("The original string : " + str(test_string)) 
  
# # using encode() + len() 
# # getting size of string in bytes 
# res = len(test_string.encode('utf-8')) 
      
# # print result 
# print("The length of string in bytes : " + str(res)) 

# import constant


# # for string len(name.encode('utf-8'))

# morsalin = "holding__threading_local"

# print(len(morsalin.encode('utf-8')))


# # for int repr
# env = 464508

# print(len(repr(env).encode('utf-8')))

# import sys

# morsalin2= 'morslain2'

# print("the full size of "+str(morsalin2))

# res = sys.getsizeof(morsalin2)
# print(res)


# import random

# var = random.randint(0,10)
# print(var)

# a = int(input("what is the base"));
# b = int(input("what is the exponent"));
# print(pow(a,b))


def main(a,b):
    return a+b

print(main(2,3))

def data(a,b):
    return a+b
print(data(2,2))


def mapData(d):
    return d+d/0.1

tup = (1,2,3,4,5,6,7,8,9)

m = map(mapData,tup)

print(list(m))


# Double all numbers using map and lambda 

numbers = (1, 2, 3, 4) 
result = map(lambda x: x + x, numbers) 
print(list(result)) 


# Add two lists using map and lambda 

numbers1 = [1, 2, 3] 
numbers2 = [4, 5, 6] 

result = map(lambda x, y: x + y, numbers1, numbers2) 
print(list(result)) 


# List of strings 
l = ['sat', 'bat', 'cat', 'mat'] 

# map() can listify the list of strings individually 
test = list(map(list, l)) 
print(test) 
