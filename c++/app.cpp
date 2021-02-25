// #include <iostream>
// // using namespace std;
// using std::cin;
// using std::cout;
// int main()
// {
//   cout << "Hello World! \n";
//   {

//     cout << "you Have to ";
//     int m = 30;
//     int xa = 20;
//     cout << "data is " << m << " " << xa << "\n";
//     printf("morsalin \n");

//     int morsalin;
//     cout << "yout are want";
//     cin >> morsalin;
//     cout << "Yout have " << morsalin << std::endl;

//   }
//   return 0;
// }




#include <iostream>
#include <cmath>



using std::cin;
using std::cout;




double power(double,int);


int main()
{

  int base, exponent;
  cout << "what is the base";
  cin >> base;
  cout << "what is the exponent";
  cin >> exponent;
  double powe = power(base, exponent);

  cout<<powe;

  return 0;
}

double power(double base,int expo){
  double rs = 1;
  for(int i = 0 ; i < expo ; i++){
    rs =rs*base;
  }
  return rs;
}
