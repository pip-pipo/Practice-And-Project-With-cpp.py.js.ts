import pymongo
import Query
from pymongo import MongoClient

connection = MongoClient('localhost', 27017)

mydataBase = connection.todo

myCollections = mydataBase.pymongo


print(" \n \t  welcome to JonathonDB  \t \n")
print("          ==========Start===========             \n")


print("\t Select 1 for INSERT data")
print("\t Select 2 for UPDATE data")
print("\t Select 3 for DELETE data")
print("\t Select 4 for SHOW data")
print("\t Select 5 for SHOWALL data \n")


try:
    userSelect = int(input("Select:-  "))
    if(type(userSelect) == int):
        if(userSelect == 1):
            Query.insertData()
        # elif(userSelect == 2):
        #     updateData()

except:
    print(" \n Please Enter Following Options")



print("          ==========End===========             \n")


print(myCollections.find())
