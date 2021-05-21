# import random
# import constant

# constant    = ["list1","salin","sa"]

# constant.append("morslin")

# print(constant)
# # constant.clear()
# # print(constant)


# data = constant.copy()

# print(data)

# print(constant.count("morslin"))
# print(constant.count("salin"))
# print(constant.count("m"))


# def appends(arrOrList,data):
#     if(arrOrList or data):
#         # arrOrList.append(data)
#         arrOrList[0]=data
#         print(arrOrList)
#         return arrOrList


# man = ['hi']
# # man.appends(man,"datas")

# print(appends(man,"datas"))
# # print(man)
# print(memoryview(bytes(5)))

# # x = 1
# # y =2.5
# # z = 334343425436425343.3432534j

# # print(x)
# # print(y)
# # print(z)

# c = 2
# print(type(c))
# max = float(c)
# print(type(c))
# print(type(max))


# b ="hello , World"
# # print(b[2:5])

# list_of_b_data = b.split(',')

# list_of_b_data.append("hero")

# print(list_of_b_data)


# class String:
#     def __init__(self):
#         pass
#     def string(self,text:str):
#         return text
#     def __main__(self):
#         return self.string("morsalin")


# obj = String()

# print(obj.string("morsalin"))
# print(type(obj.string("morsalin")))

# print(obj.__main__())


# let = 3
# lets =3.0

# print(let==lets)



import os

# print("how many files do you want?")
# inputdata = input()

# makeFileInDir = "c:/Users/USER/Dropbox/My PC (DESKTOP-VDJO078)/Desktop/VS_CODE/2021/C++/python/All/data1"

# os.mkdir(makeFileInDir)

# for i in range(int(inputdata)):
#     os.mkdir(str(makeFileInDir+f"/morsalin{i}"))

# counter =1

# while(counter<=3):
#     principal = int(input("Enter the Principal amount:"))
#     numberofyears = int(input("Enter the number of years:"))
#     ratefinterest = float(input("Enter the rate of interest:"))
#     simpleinterest = principal * numberofyears * ratefinterest / 100
#     print(f"simple interest {simpleinterest}")
#     counter=counter+1


for i in range(5):
    print("\t*"*i + "_" * i+" "+"{"*i + "(_*-*_)"+"}"*i)