package com.jspider.constructor;
class Car{
	Car(int a){
		System.out.println("Basic variant");
	}
	Car(double d){
		this(10);
		System.out.println("Mid variant");
	}
	Car(String s){
		this(4.5);
		System.out.println("Top variant");
	}
}
public class Mainclass3 {
	public static void main(String args[]) {
		Car c=new Car("PQR");
	}
}
