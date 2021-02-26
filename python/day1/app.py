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


# def main(a,b):
#     return a+b

# print(main(2,3))

# def data(a,b):
#     return a+b
# print(data(2,2))


# def mapData(d):
#     return d+d/0.1

# tup = (1,2,3,4,5,6,7,8,9)

# m = map(mapData,tup)

# print(list(m))


# Double all numbers using map and lambda

# numbers = (1, 2, 3, 4)
# result = map(lambda x: x + x, numbers)
# print(list(result))


# # Add two lists using map and lambda

# numbers1 = [1, 2, 3]
# numbers2 = [4, 5, 6]

# result = map(lambda x, y: x + y, numbers1, numbers2)
# print(list(result))


# # List of strings
# l = ['sat', 'bat', 'cat', 'mat']

# # map() can listify the list of strings individually
# test = list(map(list, l))
# print(test)

print("hello world\n"+"hello")

print("hello morsalin \"morsalin\" ")
print("hello morsalin \'morsalin\' ")
print("hwllo \\hod\\")
print("morsalin \r morsa")


# string methods

# Method 	Description
# capitalize()	Converts the first character to upper case
# casefold()	Converts string into lower case
# center()	Returns a centered string
# count()	Returns the number of times a specified value occurs in a string
# encode()	Returns an encoded version of the string
# endswith()	Returns true if the string ends with the specified value
# expandtabs()	Sets the tab size of the string
# find()	Searches the string for a specified value and returns the position of where it was found
# format()	Formats specified values in a string
# format_map()	Formats specified values in a string
# index()	Searches the string for a specified value and returns the position of where it was found
# isalnum()	Returns True if all characters in the string are alphanumeric
# isalpha()	Returns True if all characters in the string are in the alphabet
# isdecimal()	Returns True if all characters in the string are decimals
# isdigit()	Returns True if all characters in the string are digits
# isidentifier()	Returns True if the string is an identifier
# islower()	Returns True if all characters in the string are lower case
# isnumeric()	Returns True if all characters in the string are numeric
# isprintable()	Returns True if all characters in the string are printable
# isspace()	Returns True if all characters in the string are whitespaces
# istitle() 	Returns True if the string follows the rules of a title
# isupper()	Returns True if all characters in the string are upper case
# join()	Joins the elements of an iterable to the end of the string
# ljust()	Returns a left justified version of the string
# lower()	Converts a string into lower case
# lstrip()	Returns a left trim version of the string
# maketrans()	Returns a translation table to be used in translations
# partition()	Returns a tuple where the string is parted into three parts
# replace()	Returns a string where a specified value is replaced with a specified value
# rfind()	Searches the string for a specified value and returns the last position of where it was found
# rindex()	Searches the string for a specified value and returns the last position of where it was found
# rjust()	Returns a right justified version of the string
# rpartition()	Returns a tuple where the string is parted into three parts
# rsplit()	Splits the string at the specified separator, and returns a list
# rstrip()	Returns a right trim version of the string
# split()	Splits the string at the specified separator, and returns a list
# splitlines()	Splits the string at line breaks and returns a list
# startswith()	Returns true if the string starts with the specified value
# strip()	Returns a trimmed version of the string
# swapcase()	Swaps cases, lower case becomes upper case and vice versa
# title()	Converts the first character of each word to upper case
# translate()	Returns a translated string
# upper()	Converts a string into upper case
# zfill()	Fills the string with a specified number of 0 values at the beginning


text = "Morsalinoooo"

print(text.casefold())

print(text.center(20, "o"))

print(text.count('o'))

print(text.encode('utf-8'))


txt = "My name is Ståle"

print(txt.encode(encoding="ascii", errors="backslashreplace"))
print(txt.encode(encoding="ascii", errors="ignore"))
print(txt.encode(encoding="ascii", errors="namereplace"))
print(txt.encode(encoding="ascii", errors="replace"))
print(txt.encode(encoding="ascii", errors="xmlcharrefreplace"))

print(text.endswith("o"))

txt = "H\te\tl\tl\to"

x = str(txt.expandtabs(6))


print(x)


let = "hello , world i am a human i am not a robot"

print(let.find('robot', 0, 50))


salin = 'mor'

age = 18

text1 = "My name is {age}, the age is {salin}".format(age=age,salin=salin)

print(text1)


txt = "Hello, welcome to my world."

x = txt.index("e", 5, 10)

print(x) 

txt = "dfs"

x = txt.isalnum()

print(x) 

print(txt.isalpha())



txt = "\u0033" #unicode for 3

x = txt.isdecimal()

print(x) 
txt ="mos"
print(txt.isdigit())


txt = "emo"

x = txt.isidentifier()

print(x)

print(txt.islower())



me = "d"
print(me.isnumeric())