package main 

import "fmt"

type person struct {
	nama string
	age int
	pekerjaan string
};



func main(){
	var pers person;
	pers.nama = "ramma";
	pers.age = 33; 
	pers.pekerjaan = "software engineer"; 
	fmt.Println(pers.nama, pers.age, pers.pekerjaan);
	
}