package com.jspider.constructor;
class Demo{
	Demo(){
		System.out.println("Demo() constructor");
	}
}
class Sample extends Demo{
	Sample(){
		super();
		System.out.println("Sample() constructor");
	}
}
public class Mainclass5 {
	public static void main(String args[]) {
		Sample ref=new Sample();
	}

}
