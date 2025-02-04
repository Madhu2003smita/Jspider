package com.jspider.inheritance;

class Demo {
	int a =10;
	void test() {
		System.out.println("Executing test()...");
	}
}
class Sample extends Demo{
	
}
public class Mainclass1{
	public static void main(String [] args) {
		Sample ref=new Sample();
		System.out.println(ref.a);
		ref.test();
	}
}
