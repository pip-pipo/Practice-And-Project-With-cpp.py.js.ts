import sys,os,time



# The Python built-in functions are defined as the functions whose functionality is pre-defined in Python. The python interpreter has several functions that are always present for use. These functions are known as Built-in Functions. There are several built-in functions in Python which are listed below:



print(abs(-45))


integer = -20
print('Absolute value of -20 is:', abs(integer))  



print(all([34,4,5,0]))



    # # all values true  
    # k = [1, 3, 4, 6]  
    # print(all(k))  
      
    # # all values false  
    # k = [0, False]  
    # print(all(k))  
      
    # # one false value  
    # k = [1, 3, 7, 0]  
    # print(all(k))  
      
    # # one true value  
    # k = [0, False, 5]  
    # print(all(k))  
      
    # # empty iterable  
    # k = []  
    # print(all(k))  

# Output:

# True
# False
# False
# False
# True


print(bin(7))


print(any({}))
x = "hello world am is here å"
print(ascii(x))


print(bool(x))

isFalse = 'f'
print(bool(isFalse))


def main():
    max = True
    mor = 0
    while max:
        print(" true ")
        mor+=1
        if(mor==5):
            max = False

if (callable(main)):
    main()
print('after 4 senconds')