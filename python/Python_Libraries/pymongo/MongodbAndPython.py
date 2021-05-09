import pymongo
import Query
from pymongo import MongoClient

connection =  MongoClient('localhost', 27017)
mydataBase =  connection.todo
myCollections =  mydataBase.pymongo




print(" \n \t  welcome to JonathonDB  \t \n")
print("          ==========Start===========             \n")


print("\t Select 1 for INSERT data")
print("\t Select 2 for UPDATE data")
print("\t Select 3 for DELETE data")
print("\t Select 4 for SHOW data")
print("\t Select 5 for SHOWALL data \n")



try:
    userSelect = int(input("Select:-  "))
    if(type(userSelect) == int and userSelect == 1):
         Query.insertData()

    elif(type(userSelect) ==int and userSelect ==2):
        Query.updateData()


    elif(type(userSelect) ==int and userSelect ==3):
        Query.delete()


    elif(type(userSelect) ==int and userSelect ==4):
        pass

    elif(type(userSelect) ==int and userSelect ==5):
        pass

    else:
        print("not")

except:
    print(" \n Please Enter Following Options")


print("          ==========End===========             \n")
