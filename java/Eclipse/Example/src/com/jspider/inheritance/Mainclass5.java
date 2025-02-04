package com.jspider.inheritance;
class Whatsapp1{
	void chat() {
		System.out.println("chat feature");
	}
}
class Whatsapp2 extends Whatsapp1{
	void call() {
		System.out.println("call feature");
	}
}
class Whatsapp3 extends Whatsapp2{
	void status() {
		System.out.println("status feature");
	}
}
public class Mainclass5 {
	public static void main(String args[]) {
		Whatsapp1 w1= new Whatsapp1();
		w1.chat();
		
		Whatsapp2 w2= new Whatsapp2();
		w2.chat();
		w2.call();
		
		Whatsapp3 w3= new Whatsapp3();
		w3.chat();
		w3.call();
		w3.status();
		
		
	}
}
