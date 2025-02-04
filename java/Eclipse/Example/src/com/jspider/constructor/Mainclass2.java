package com.jspider.constructor;
class City{
	City(int a){
		System.out.println("Bengaluru");
	}
	City(int a,double b){
		this (a);
		System.out.println("Chennai");
	}
	City(int a,double b, boolean c){
		this(a,b);
		System.out.println("Hydrabad");
	}
}
public class Mainclass2 {
	public static void main(String args[]) {
		City c1=new City(10,3.5,true);
	}

}
