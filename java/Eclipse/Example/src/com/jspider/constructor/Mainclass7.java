package com.jspider.constructor;
class Delta{
	Delta(){
		this(10);
		System.out.println("Delta() constructor");
	}
	Delta(int a){
		System.out.println("Delta(int) constructor");
	}
}
class Example extends Delta{
	Example(){
		System.out.println("Example() constructor");
	}
	Example(int a){
		this();
		System.out.println("Example(int) constructor");
	}
}
public class Mainclass7 {
	public static void main(String args[]) {
		Example ex=new Example(10);
	}
}
