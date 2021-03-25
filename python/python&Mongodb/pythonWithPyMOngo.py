from pymongo import  MongoClient

connection = MongoClient("localhost", 27017)

my_Database = connection['todo']

data = my_Database.data

# newData  = {
#     "Name":"MOrsalin PIp-PIpo",
#     "location":"Dhaka",
#     "contact_no":"01820348783",
#     "profession":"Programmer"
    
# }

# result = data.insert_one(newData)
# print("Data are successfully Inserted...")
# print('One post: {0}'.format(result.inserted_id))



# entry_data1 = {
#     'Name': 'Kaveri Restaurants',
#     'Location': 'Ranchi',
#     'Contact_No': 356789,
#     'Type' : 'Veg Food'
# }
# entry_data2 = {
#     'Name': 'Basant Vihar',
#     'Location': 'Patna',
#     'Contact_No': 35635689,
#     'Type' : 'South Indian Food'
# }
# entry_data3 = {
#     'Name': 'Punjab Sweet House ',
#     'Location': 'Ranchi',
#     'Contact_No': 3567833489,
#     'Type' : 'Sweets'
# }
 
# data = data.insert_many([entry_data1, entry_data2, entry_data3])
# print("Data are successfully Inserted...")
# print('Multiple posts: {0}'.format(data.inserted_ids))

# myobj = {
#     "id":3,
#     "name":"morsalin"
# }


# data.insert_one(myobj)
dictInstance = {"id":4,"name":"i am i m r a n"}

print(data.insert_one(dictInstance))

print(data.find())





# for datas in data.find():
#     print(datas)




print(data.find_one({'id':3}))