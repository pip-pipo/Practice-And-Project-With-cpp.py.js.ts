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






// #include<iostream>

// using namespace std;

// bool isSeparator(char c, char * separators){
//     char endOfString = '\0';
//     char* sepPtr = separators;
//     bool ret = false;

//     while(*sepPtr != endOfString){
//         if(c == *sepPtr){
//             ret = true;
//             break;
//         }
//         sepPtr++;
//     }
//     return ret;
// }


// int charArrayLength(char* a){
    
// }



// int main(){

// cout<<"hero"<<endl;
//     return 0;
// }



#include<iostream>
using namespace std;

auto salin(int a, int b ){
    return "morsalin" + a + b;
};




long add2(int i = 1){
    return 3 + i;
};


int main(){

  int fastdaysNumber =   add2(8);
  cout<<fastdaysNumber<<endl;



int const a[] = {36,4,56,66};
int const n = sizeof(a);
cout<<n<<"\n";

cout <<a[0]<<endl;



cout<<salin(3,4)<<endl;





    return 0;
}

