#include <iostream>
#include <climits>
#include <cmath>

using std::cin;
using std::cout;
using std::ostream;

int man(bool data)
{
    return data;
}

int main()
{

    // data types
    // cout << "morsalin";
    char nc;
    short y;
    int b;
    long c;
    long long d;
    unsigned short aa;
    unsigned int bb;
    unsigned long dd;
    unsigned long long ccs;

    // cout << sizeof(long long) << SHRT_MIN;

    signed char cn = 129;
    cout << cn << std::endl;

    cout << "\\/" << std::endl;

    bool isYou = true;
    cout << isYou << std::endl;
    cout << man(isYou);

    if (true)
    {
        cout << "hello";
    }
    int no1, no2, sum;
    cout << "\nEnter the first number = ";
    cin >> no1;
    cout << "\nEnter the second number = ";
    cin >> no2;
    sum = no1 + no2;
    cout << "\nThe sum of " << no1 << " and " << no2 << " = " << sum << '\n';
    cout<<no1+no2;





    
    return 0;
}
