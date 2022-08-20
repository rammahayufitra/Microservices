package main 

import "fmt"

func main(){
	slice1 := []int{};
	fmt.Println(len(slice1));
	fmt.Println(cap(slice1));
	fmt.Println(slice1);

	slice2 := []string{"ramma", "belajar", "bahasa", "GO"};
	fmt.Println(slice2);
	fmt.Println(len(slice2));
	fmt.Println(cap(slice2));
	// make slice from array
	var array1 = [6]int{1,2,3,4,5,6};
	fmt.Println(array1);
	var slice_array1 = array1[2:4];
	fmt.Println(slice_array1);
	//make slice from make function
	slice_make1 := make([]int,5);
	fmt.Println(slice_make1);
	slice_make2 := make([]int,5,10);
	fmt.Println(slice_make2);

	// modify slice
	// Access Elements of a Slice 
	slice_mod1 := []int{10,20,30};
	fmt.Println(slice_mod1[1]);
	fmt.Println(slice_mod1[2]);
	slice_mod1[2] = 40;
	fmt.Println(slice_mod1[2]);
	slice_mod2 := append(slice_mod1, 100,200);
	fmt.Println(slice_mod2);
	slice_mod3 := []int{1000,2000,3000,4000};
	slice_mod4 := append(slice_mod1,slice_mod3...);
	fmt.Println(slice_mod4);


}