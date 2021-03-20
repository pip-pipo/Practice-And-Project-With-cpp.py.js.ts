#include <iostream>
#include<cmath>

int main()
{
    std::cout << "hero"<<std::endl;
    std::string me = "morsalin" ;
    std::cout<<me<<std::endl;

    int myInt =500;
    float myFloat = 4.5;
    double myDouble = 44.44;
    char MLetter = 'M';
    bool myBool = false;
    std::string fullName = me;
    std::cout<<&fullName<<std::endl;

    int counter = 04;
    if(counter<=04){
        std::cout<<counter<<std::endl;
    }


std::cout<<sqrt(44)<<std::endl;
std::cout<<round(44)<<std::endl;
std::cout<<log(44)<<std::endl;
std::cout<<abs(44)<<std::endl;
std::cout<<floor(44.44)<<std::endl;


std::string food = "Pizza";  // A food variable of type string
std::string* ptr = &food;    // A pointer variable, with the name ptr, that stores the address of food

// Output the value of food (Pizza)
std::cout << food << "\n";

// Output the memory address of food (0x6dfed4)
std::cout << &food << "\n";

// Output the memory address of food with the pointer (0x6dfed4)
std::cout << ptr << "\n";


    return 0;
}