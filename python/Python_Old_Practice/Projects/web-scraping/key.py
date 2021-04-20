import requests
import bs4 
from bs4 import BeautifulSoup as bs

url = "https://home.openweathermap.org/api_keys"

r = requests.get(url)

soup = bs(r.content,"html.parser") 

# pre = soup.find("h1",{"class":"hero-title"})
# pre = soup.find("table",{"class":"material_table"})
# print(pre.get_text())


print(soup.find())