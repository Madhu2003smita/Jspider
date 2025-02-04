package com.jspider.constructor;
class Chocolate{
	Chocolate(int a){
		this(3.6);
		System.out.println("Silk");
	}
	Chocolate(double b){
		this("ABC");
		System.out.println("Kit kat");
	}
	Chocolate(String s){
		System.out.println("Munch");
	}
}
public class Mainclass4 {
	public static void main(String args[]) {
		Chocolate c=new Chocolate(10);
	}
}
