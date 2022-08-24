#include <iostream>

int main(){
    int a = 100; 
    int b = 200; 

    if (a == 100){
        if(b == 200){
            std::cout << "Nilai a adalah 100 dan Nilai b adalah 200"<<std::endl;
        }
    }
    std::cout << "Nilai masukan a adalah :" << a << " Nilai masukan b adalah :" << b <<std::endl;
    return 0;
}