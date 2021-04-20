# # Tic Tac game in pyton

# board = [' ' for x in range(10)]


# def insertLetter(letter, pos):
#     board[pos] = letter


# def spaceIsFree(pos):
#     return board[pos] = ' '


# def printBoard(board):
#     print('      |      |')
#     print(' ' + board[1] + ' | ' + board[2] + '  |  ' + board[3])
#     print('      |      |')
#     print('=========================')
#     print('      |      |')
#     print(' ' + board[4] + ' | ' + board[5] + '  |  ' + board[6])
#     print('      |      |')
#     print('=========================')
#     print('      |      |')
#     print(' ' + board[7] + ' | ' + board[8] + '  |  ' + board[9])
#     print('      |      |')


# def isWinner(bo, le):
#     pass


# def playerMove():
#     pass


# def compMove():
#     pass


# def selectRandom(board):
#     pass


# def isBoardFull(board):
#     pass


# def main():
#     pass


# main()


# import pyfiglet


# loadTxtShow = pyfiglet.figlet_format(' PYDB',font="big")

# print(loadTxtShow

# )


import numpy as np

isOpen = True

while(isOpen):
    print("=============PyJonathon==========")
    print("press 1 for getting the menu")
    print("press 2 for exit")
    whatPressed = int(input())
    print("=============End Of PyJonathon==========")
    if(whatPressed == 1):
            print("+++++++++Option's+++++++++++")
            print("press 1 for making zeros")
            print("press 2 for making random array")
            print("press 3 for making ndarray")
            print("press 4 for go back")
            optionSelect = int(input())
            print("+++++++++End Of Option's+++++++++++")
            if(optionSelect==1):
                print("%%%%%%%% Making Zeros %%%%%%")
                print("How Much zeros do you want?")
                howMuchZerosWant = int(input())
                print(np.zeros((howMuchZerosWant,howMuchZerosWant)))
                print("%%%%%%%% end of Making Zeros %%%%%%")

            if(optionSelect==2):
                pass
            if(optionSelect==3):
                pass
            if(optionSelect==4):
                whatPressed=455

    elif(whatPressed == 2):
            isOpen = False
    else:
            print("--------------warning!---------------")
            print("\t please press the currect option's\n")
            print("============================================")
