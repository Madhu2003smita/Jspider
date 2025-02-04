package com.jspider.inheritance;
class AdobeFree{
	void read() {
		System.out.println("read ....");
	}
}
class AdobePaid extends AdobeFree{
	void edit() {
		System.out.println("edit ....");
	}
}
public class Mainclass6 {
	public static void main(String args[]) {
		AdobeFree free = new AdobeFree();
		free.read();
		AdobePaid paid = new AdobePaid();
		paid.read();
		paid.edit();
	}

}
