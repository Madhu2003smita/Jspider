class Madhu{
    public static void main(String[] args) {
      //  String str = "Madhu";
      //    System.out.println(str.charAt(3));//o/p-3

      // String s1 = "Madhusmita Shial";
      // System.out.println(s1.length());//o/p-16

      // String str = "Tiger";
      // char [] ch = str.toCharArray();
      // for(int i=0;i<ch.length;i++){
      //     System.out.println(ch[i]);//o/p-T i g e r
      // }


      // String str ="Develoer";
      // System.out.println(str.indexOf('m'));//-1
      // System.out.println(str.indexOf('l'));//4


      // String str = "Developer";
      // System.out.println(str.lastIndexOf('e'));//7


      // String str="madhu";
      // System.out.println(str.toUpperCase());//MADHU
      // System.out.println(str.toLowerCase());//madhu

      // String str = "Developer";
      // System.out.println(str.substring(2));//veloper
      // System.out.println(str.substring(2,4));//ve

      // String str = "   core java   ";
      // System.out.println(str.trim());//core java


      String str = "Jspide Qspider Software Training";
      String [] s = str.split(" ");
      for(String s1:s){
          System.out.println(s1);
      }
    }
}