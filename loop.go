package main 

import "fmt"

func loop1(){
	fmt.Println("loop1");
	for i:= 0; i<10; i++{
		fmt.Println(i)
	}
}

func loop2(){
	fmt.Println("continue");
	for i:= 0; i< 10; i++ {
		// if i == 5{
		// 	continue
		// }
		fmt.Println(i);
	}
}

func main(){
	// loop1()	
	loop2()

}