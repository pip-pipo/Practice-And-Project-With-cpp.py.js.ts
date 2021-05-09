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
    niddata = userNidNumber
    if(userName and userNidNumber):
        if(len(userName) > 3):
            print("username is ok")
            if(len(userNidNumber) == 13):
                print("nid is ok")
                for userNidNumber in MongodbAndPython.myCollections.find():
                    if(userNidNumber["nidNumber"]==niddata):
                        print("yes got")
                        print(userNidNumber["nidNumber"])
                        
                        user_idPrevious = userNidNumber["_id"]
                        userNamePrevieuse = userNidNumber["userName"]
                        nidNumberPrevieuse = userNidNumber["nidNumber"]
                        serialNumberPrevieuse = userNidNumber["serialNumber"]
                        dateOfBirthPrevieuse = userNidNumber["dathOfBirth"]
                        print(userNidNumber)


                        userNameUpdated = str(input(f"Please Update Your  {userNamePrevieuse} With :- "))

                        nidNumberUpdated = str(input(f"Please Update Your 13 digit {nidNumberPrevieuse} with :- "))


                        serialNumberUpdated = str(
                            input(f"Please Update Your 5 digit {serialNumberPrevieuse} with :- "))

                        dathOfBirthUpdated = str(input(f"Please Update Your DathOfBirth {dateOfBirthPrevieuse} with :- "))
                        
                        for update in MongodbAndPython.myCollections.find_one_and_update({'_id':user_idPrevious},{
                            "_id":user_idPrevious,
                            "userName":userNameUpdated,
                            "nidNumber":nidNumberUpdated,
                            "serialNumber":serialNumberUpdated,
                            "dathOfBirth":dathOfBirthUpdated,
                        }):

                            print("Updated"+update)

                    else:
                        print("Your Data is not Valid Please provide Right data")
             

def delete():
    print("Deleting")
    # for man in MongodbAndPython.myCollections.find({'userName':"morsalin"}):
    #         pass
    data = MongodbAndPython.myCollections.find({'userName':'morsalin'})
    print(data[0]['userName'])
