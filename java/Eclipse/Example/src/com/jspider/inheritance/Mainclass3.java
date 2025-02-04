package com.jspider.inheritance;
class Delta{
	static int num=100;
	int val = 200;
}
class Example extends Delta{
	
}
public class Mainclass3 {
	public static  void main(String args[]) {
        Example ex=new Example();
		System.out.println(ex.num);
	}
}
