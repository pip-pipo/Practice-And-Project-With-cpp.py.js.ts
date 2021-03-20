# from tkinter import *

# class Student:
#     def __init(self,root):
#         self.root = root
#         self.root.title("Student manegmant system")
#         self.root.geometry("1250x700+0+0")
# root=tk()
# ob = Student(root)


# import phonenumbers

# from test import number

# from phonenumbers import geocoder

# ch_number = phonenumbers.parse(number,"CH");

# print(geocoder.description_for_number(ch_number,"en"))

# from phonenumbers import carrier

# service_number = phonenumbers.parse(number,"RO")

# print(carrier.name_for_number(service_number,"en"))


# import requests

# import json

# response = requests.get("https://api.coindesk.com/v1/bpi/currentprice.json")

# print(response.json()['bpi']['USD']['rate'])
# class bcolors:
#     HEADER = '\033[95m'
#     OKBLUE = '\033[94m'
#     OKGREEN = '\033[92m'
#     WARNING = '\033[93m'
#     FAIL = '\033[91m'
#     ENDC = '\033[0m'
#     BOLD = '\033[1m'
#     UNDERLINE = '\033[4m'

# print(f"{bcolors.WARNING}Warning: No active frommets remain. Continue?{bcolors.ENDC}")
# print(f"{bcolors.UNDERLINE}hai ther{bcolors.BOLD}")


import pyfiglet

txt = pyfiglet.figlet_format("Morsalin",font="avatar")

print(txt)