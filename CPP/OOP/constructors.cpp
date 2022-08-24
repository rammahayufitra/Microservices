#include <iostream>

//inside
// class Car{
//     public:
//         std::string brand; 
//         std::string model; 
//         int year;
//     Car(std::string x, std::string y, int z){
//         brand = x; 
//         model = y; 
//         year = z;
//     }  
// };

//outside 
class Car{
    public:
        std::string brand; 
        std::string model; 
        int year; 
    Car(std::string x, std::string y, int z);
};

Car::Car(std::string x, std::string y, int z){
    brand = x; 
    model = y;
    year = z; 
};

int main(){
    Car car("BMW", "X5", 1999);
    std::cout << "Brand :" << car.brand << "\n" << "Model :" << car.model << "\n" << "year :" << car.year << std::endl;   
    return 0;
}