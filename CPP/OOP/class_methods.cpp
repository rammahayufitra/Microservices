#include <iostream>

// Method is inside
// class myClass{
//     public:
//         void myMethod(){
//             std::cout << "Hello, this is myMethod"<<std::endl;
//         }
// };

// Method is outside 
class myClass{
    public:
        void myMethod();
};

void myClass::myMethod(){
    std::cout << "Hello, this is outside method"<<std::endl;
};

int main(){
    myClass myclass; 
    myclass.myMethod();
    return 0;
}