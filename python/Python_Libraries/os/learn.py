import os


def current_path():
    print(os.getcwd())
    print("cwd printed")


current_path()

mkdir_current_dir = "c:/Users/USER/Dropbox/My PC (DESKTOP-VDJO078)/Desktop/VS_CODE/2021/C++/python/Python_Libraries/os/"


# os.chdir("../../")

# print("chandged")

# current_path()


# os.mkdir(mkdir_current_dir)


# const_dirMaikng = "morsalinKhan"

# path = os.path.join(mkdir_current_dir,const_dirMaikng)

# os.makedirs(path)

# d = os.listdir("c:/Users/USER/Dropbox/My PC (DESKTOP-VDJO078)/Desktop/VS_CODE/2021/C++")
# print(d)

print(os.name)
# Using os.remove()
# Using os.rmdir()


# try:
#     fileNmae = "text.txt"
#     f= open(fileNmae,"w")
#     f.write("morsalinKhan")
#     text = f.readLine()
#     print(text)
#     f.close()

# except IOError:
#     print(f"problem reading file  {fileNmae}")



try:
    fileNmae = "text.txt"
    os.rename(fileNmae,"morsalinDadulivai.txt")

except IOError:
    print(f"problem reading file  {fileNmae}")
