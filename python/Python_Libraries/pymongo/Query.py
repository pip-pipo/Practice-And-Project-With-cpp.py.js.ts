import MongodbAndPython

def insertData():
    try:
        userName = str(input("Please Enter Your UserName :- "))
        nidNumber = str(input("Please Enter Your 13 digit NidNumber :- "))
        serialNumber = str(
            input("Please Enter Your 5 digit SerialNumber  :- "))
        dathOfBirth = str(input("Please Enter Your DathOfBirth dd/mm/yy :- "))

        if userName or nidNumber or serialNumber or dathOfBirth:
            if(len(userName) > 3):
                print("username is OK")
                if(len(nidNumber) == 13):
                    print("nidnumber is ok")
                    if(len(serialNumber) == 5):
                        print("serialNumber is ok")
                        if(len(dathOfBirth) == 10):
                            print("dathOfBirth is ok")    
                            MongodbAndPython.myCollections.insert_one({
                                "userName": userName,
                                "nidNumber": nidNumber,
                                "serialNumber": serialNumber,
                                "dathOfBirth": dathOfBirth
                            })
                            print("Data Inserted Successfully")
                        else:
                            print("DateOfBirth must be dd/mm/yyyy")
                    else:
                        print("serialNumber must be atleast 5 characters")
                else:
                    print("nidNumber must be atleast 13 characters")

            else:
                print("\n userName must be atleast 4 characters long")

    except:
        print("\n Your data is wornge! please provide right Data ")
        print("   Please Follow The Instructions \n")


def updateData():
    userName = str(input("Please Enter Your UserName :-"))
    userNidNumber = str(input("Please Enter Your 13 digit NidNumber:-"))
    if(userName and userNidNumber):
        if(len(userName) > 3):
            print("username is ok")
            if(len(userNidNumber) == 13):
                print("nid is ok")
                # mydata = MongodbAndPython.myCollections.find({'nidNumber':userNidNumber})
                # print(mydata)
                # for userNidNumber in MongodbAndPython.myCollections.find():
                    # print(userNidNumber["nidNumber"]==userNidNumber)
                # if(mydata):
                #     print("yes got")
                # else:
                #     print("no got")
                    # print(userName,userNidNumber)

                    # if(userNidNumber['nidNumber'] == userNidNumber):
                    #     print(userNidNumber)
