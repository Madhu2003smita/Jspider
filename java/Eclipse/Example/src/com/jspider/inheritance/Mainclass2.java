package com.jspider.inheritance;
class Alpha{
	void play() {
		System.out.println("Executing play()...");
	}
}
class Beta extends Alpha{
	void run() {
		System.out.println("Executing run( )...");
	}
}
public class Mainclass2 {
	public static void main(String [] args) {
		Beta ref=new Beta();
		ref.play();
		ref.run();
	}

}
