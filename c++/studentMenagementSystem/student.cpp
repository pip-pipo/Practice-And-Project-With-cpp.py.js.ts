#include <iostream>

using namespace std;

string arr1[20], arr2[20], arr3[20], arr4[20], arr5[20];

int total = 0;
void enter()
{
    int choice;
    cout << "How many students do you want to enter : ";
    cin >> choice;
    if (total == 0)
    {
        total = total + choice;

        for (int i = 0; i <= choice; i++)
        {
            cout << "\n Enter data of Students:" << i + 1 << endl
                 << endl;

            cout << "Enter name : ";
            cin >> arr1[i];

            cout << "Enter RollNo : ";
            cin >> arr2[i];

            cout << "Enter Course : ";
            cin >> arr3[i];

            cout << "Enter Class : ";
            cin >> arr4[i];

            cout << "Enter contact : ";
            cin >> arr5[i];
        }
    }
    else
    {
        for (int i = total; i <= total + choice; i++)
        {
            cout << "\n Enter data of Students:" << i + 1 << endl
                 << endl;

            cout << "Enter name : ";
            cin >> arr1[i];

            cout << "Enter RollNo : ";
            cin >> arr2[i];

            cout << "Enter Course : ";
            cin >> arr3[i];

            cout << "Enter Class : ";
            cin >> arr4[i];

            cout << "Enter contact : ";
            cin >> arr5[i];
        }
    }
}

void show()
{
    for (int i = 0; i < total; i++)
    {
        cout << "Data of student " << i + 1 << endl
             << endl;
        cout << "Name: " << arr1[i] << endl;
        cout << "Name: " << arr2[i] << endl;
        cout << "Name: " << arr3[i] << endl;
        cout << "Name: " << arr4[i] << endl;
        cout << "Name: " << arr5[i] << endl;
    }
}

void search()
{
}

void update()
{
}

void deleteStudent()
{
}

int main()
{
    int value;
    while (true)
    {
        cout << "Press 1 to enter data" << endl;
        cout << "Press 2 to show data" << endl;
        cout << "Press 3 to search data" << endl;
        cout << "Press 4 to update data" << endl;
        cout << "Press 5 to delete data" << endl;
        cout << "Press 6 to exit" << endl;
        cin >> value;
        switch (value)
        {
        case 1:
            enter();
            break;
        case 2:
            show();
            break;
        case 3:
            search();
            break;
        case 4:
            update();
            break;
        case 5:
            deleteStudent();
            break;
        case 6:
            exit(0);
            break;

        default:
            cout << "Invalid input " << endl;
            break;
        }
    }

    return 0;
}