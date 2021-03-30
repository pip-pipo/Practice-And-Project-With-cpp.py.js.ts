#include <iostream>
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

using namespace std;

int makeGmae()
{   bool isCorrect = true;
    srand(time(0));
    int ranodmNumber = (rand() % 10);
    while (isCorrect)
    {
    int number;
    cout << "Enter your gessing Number Between 1-10"
         << "  "<<endl;
    cin >> number;

    if (number == ranodmNumber)
    {
        cout << "your Guessing is correct you got 100 Points"<<endl;
        isCorrect=false;
    }
    else if (number<=ranodmNumber)
    {
        cout << "hint:: The correct value is gatter then "<< number<<endl;
        
    }
     else if (number>=ranodmNumber)
    {
        cout << "hint:: The correct value is less then "<< number<<endl;
        
    }
    else{
        cout << "Please Try again it's not correct "<< "the correct value was  =  "<<ranodmNumber<<endl;
    }

    }
    
}

int main()
{

    makeGmae();

    return 0;
}