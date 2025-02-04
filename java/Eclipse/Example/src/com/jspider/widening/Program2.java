package com.jspider.widening;
class Foxtrot{
	void play(float val) {
		System.out.println("Value : "+val);
	}
}
public class Program2 {
	public static void main(String args[]) {
		Foxtrot fox =  new Foxtrot();
		fox.play(3.5f);
		fox.play(15);//int-->float
		fox.play('M');//char-->float
		fox.play(3.3);
	}
}
