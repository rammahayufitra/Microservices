#include <iostream>

int main(){
    int a = 100; 
    int b = 200;
    switch (a){
    case 100:
        std::cout << "this is part of aouter switch" << std::endl; 
        switch (b){
            case 200: 
            std::cout << "this is part of inner switch" << std::endl; 
        }  
    }  
    return 0;
}