// #include <iostream>

// // const char endOfCharArray = "\0";

// const char endOfCharArray = '\0';

// int main(int argc, char** argv) {
    
//     using namespace std;


// int ret = 0;

// if (argc == 2) 

// {cerr << "error: no arguments on cmd line" << endl;ret = 1;}

//  else {for(int i = 0; i < argc; i++) {while(*(argv[i]) != endOfCharArray)

//  {cout << *(argv[i]);argv[i]++;}cout << endl;}}return ret;
// }






#include<iostream>

using namespace std;

bool isSeparator(char c, char * separators){
    char endOfString = '\0';
    char* sepPtr = separators;
    bool ret = false;

    while(*sepPtr != endOfString){
        if(c == *sepPtr){
            ret = true;
            break;
        }
        sepPtr++;
    }
    return ret;
}


int charArrayLength(char* a){
    
}



int main(){

cout<<"hero"<<endl;
    return 0;
}