#include <iostream>

class Car {
    public: 
        std::string brand; 
        std::string model;
        int year; 
};


int main(){
    Car car1; 
    car1.brand = "BMW";
    car1.model = "X5"; 
    car1.year = 1999; 

    Car car2;
    car2.brand = "Ford";
    car2.model = "Mustang"; 
    car2.year = 1969; 

    std::cout << car1.brand << "\n" << car1.model << "\n" <<car1.year << std::endl;
    std::cout << car2.brand << "\n" << car2.model << "\n" <<car2.year << std::endl;    
    
    
    return 0;
}