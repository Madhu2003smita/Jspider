package com.jspider.constructor;
class Alpha{
	int a=20;
	Alpha(){
		a=100;
	}
}
class Beta extends Alpha{
	int b;
	Beta(){
		b=200;
	}
}
public class Mainclass6 {
	public static void main(String args[]) {
		Beta ref=new Beta();
		System.out.println(ref.a);
		System.out.println(ref.b); 
	}
}
