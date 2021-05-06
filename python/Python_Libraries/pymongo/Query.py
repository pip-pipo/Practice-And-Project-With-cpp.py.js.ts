import MongodbAndPython


def insertData():
    try:
        userName = str(input("Please Enter Your UserName :- "))
        nidNumber = int(input("Please Enter Your 13 digit NidNumber :- "))
        serialNumber = int(input("Please Enter Your 5 digit SerialNumber  :- "))
        dathOfBirth = str(input("Please Enter Your DathOfBirth dd/mm/yy :- "))

        if(type(userName) == str):
            print(userName)
            print(nidNumber)
            print(serialNumber)
            print(dathOfBirth)
            # inset Data useing this myCollections
            print(MongodbAndPython.myCollections.find())
    except:
        print("Please Follow The Instructions")
