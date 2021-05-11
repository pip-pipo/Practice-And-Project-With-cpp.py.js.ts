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

// #include <iostream>
// using namespace std;

// auto salin(int a, int b)
// {
//     return "morsalin" + a + b;
// };

// long add2(int i = 1)
// {
//     return 3 + i;
// };

// int theGlobalValue = 0;

// int main()
// {

//     int fastdaysNumber = add2(8);
//     cout << fastdaysNumber << endl;

//     int const a[] = {36, 4, 56, 66};
//     int const n = sizeof(a);
//     cout << n << "\n";

//     cout << a[0] << endl;

//     cout << salin(3, 4) << endl;

//     theGlobalValue = 1;

//      int const main[2][20] = {{34, 23},{3,4,5,6,7,88,112,113,221}};

//     int arrayOfFive[5] = {2,3,4,5,3};

//     int const n_rows = 3;
//     int const n_cols = 7;
//     int const m[n_rows][n_cols] = {
//         {1, 2, 3, 4, 5, 6, 7},
//         {8, 9, 10, 11, 12, 13, 14},
//         {15, 16, 17, 18, 19, 20, 21}};

//     cout<<m[0][1]<<endl;

//     const int main = 0;
//     auto sir = main;
//     cout<<((main+4)-3)<<endl;


//     return 0;
// }


#include<iostream>

using namespace std;

int main(){


    int const m[6] = {0,1,2,3,4,5};
    cout<<m<<endl;
  
    // for (int i = 0; i<long(m);i++){
    //     cout<<m[i]<<endl;
    // };

    return 0 ;
}