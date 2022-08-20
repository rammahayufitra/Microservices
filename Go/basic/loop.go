package main 

import "fmt"

func loop1(){
	fmt.Println("loop1");
	for i:= 0; i<10; i++{
		fmt.Println(i)
	}

}

func loop2(){
	fmt.Println("continue")
	for i:=0; i<10; i++{
		if i==5{
			continue;
		}
		fmt.Println(i);
	}
}

func loop3(){
	fmt.Println("break");
	for i:=0; i<10; i++ {
		if i == 7{
			break;
		}
		fmt.Println(i);
	}
}

func loop4(){
	fmt.Println("Nested Loop");
	index := [5]int{1,2,3,4,5};
	sarapan := [5]string{"nasi goreng", "mie goreng", "lontong padang", "gender pecel", "gorengan"};

	for i:=0; i<len(index); i++{
		for j:=0; j<len(sarapan); j++{
			fmt.Println(index[i], sarapan[j]);
		}
	}
}

func loop5(){
	fmt.Println("Range Loop"); 
	bahasa := [3]string{"python", "javascript", "Go"};
	for idx, content := range bahasa{
		fmt.Println(idx, content);
	}
	for _, content := range bahasa{
		fmt.Println(content);
	}
	for idx,_ := range bahasa{
		fmt.Println(idx);
	}
}


func main(){
	loop1()
	loop2()
	loop3()	
	loop4()
	loop5()

}