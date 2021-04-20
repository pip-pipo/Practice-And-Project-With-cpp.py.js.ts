import requests
from pprint import pprint

api_Key = "599b3e196e685590d609612433de6e27"


city = input("Enter your City : ")

base_Url = "http://api.openweathermap.org/data/2.5/weather?appid="+api_Key+"&q="+city

r = requests.get(base_Url).json()

pprint(r)