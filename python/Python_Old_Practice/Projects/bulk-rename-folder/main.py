import os 

def main():
    path = "C:/Users/USER/Dropbox/My PC (DESKTOP-VDJO078)/Desktop/GIF/"
    loop = 0
    for filename in os.listdir(path):

        fileNamePreset = "morsalin" + str(loop) + ".gif"

        original_files_names =path + filename
        PresetFiels =path + fileNamePreset
   
        os.rename(original_files_names, PresetFiels)

        loop+=1


if __name__ == "__main__":
    main()