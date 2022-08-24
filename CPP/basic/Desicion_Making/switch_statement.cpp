#include <iostream>

int main(){
    char grade = 'F';

    switch (grade)
    {
        case 'A':
            std::cout << "Baik Sekali" << std::endl;
            break;
        case 'B':
            std::cout << "Baik" << std::endl;
            break;
        case 'C': 
            std::cout << "Cukup" << std::endl;
            break; 
        case 'D':
            std::cout << "Lebih Baik Mengulang"<< std::endl;
            break;
        default:
            std::cout << "grade tidak tervalidasi" << std::endl;
            break;
    }
    std::cout << "Nilai anda adalah :" << grade << std::endl;
    return 0;
}