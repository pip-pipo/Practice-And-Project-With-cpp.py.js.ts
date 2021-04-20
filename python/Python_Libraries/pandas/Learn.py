import pandas as pd


df = pd.DataFrame(
    {
        "name":[
            "Alien, Mr . morsalin",
            "joker,      jonathon",
            "toppo ,        nike "
        ],
        "age":[19,16,18],
        "sex":["male","female","female"]
    }
)

print(df["age"]>16)

# print(df['sex'])
# print(df["age"].max())
# print(df.describe())


# import os 

# print(df['sex'].shape)
# print(df.head())

# print(type(df['sex']))