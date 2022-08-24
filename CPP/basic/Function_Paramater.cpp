#include <iostream>

void myFunction(std::string fname){
    std::cout<< fname << " Rael" <<std::endl;
}

// Default Parameter 
void Country(std::string country = "Indonesia"){
    std::cout << country << std::endl;
}

// Multiple Parameters
void multipleParameters(std::string fname, int age){
    std::cout << fname << " Rael " << age << " years old" << std::endl;
}

// Return value 
int returnValue(int x, int y){
    int z = x + y; 
    return z;
}

//Pass by Reference
void swapNums(int &x, int &y){
    int z = x; 
    x = y; 
    y = z;
}

//Pass Arrays
void passArrays(int arrays[5]){
    for (int i = 0; i<5; i++){
        std::cout << arrays[i] << std::endl;
    }
}

int main(){
    myFunction("Kirana");
    myFunction("Ranum");
    Country("Jepang");
    Country("Korea");
    Country();
    multipleParameters("Kirana", 4);
    multipleParameters("Ranum", 1);
    std::cout << returnValue(10,20)<<std::endl;
    int firstNum = 10; 
    int secondNum = 20; 
    std::cout << "Before Swap"  << std::endl;
    std::cout<< firstNum << secondNum << std::endl;
    swapNums(firstNum,secondNum);
    std::cout<< "After Swap" << std::endl;
    std::cout<< firstNum << secondNum << std::endl;
    int arrays[5] = {10,20,30,40,50};
    passArrays(arrays);
    return 0;
}