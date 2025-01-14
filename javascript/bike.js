function student(id,name,marks,subject){
    this.id = id;
    this.name = name;
    this.marks = marks;
    this.subject = subject;
}
let str1 = new student(8,"abc",231,"java");
console.log(str1);

class Bike{
    constructor(id,name,price,engine){
        this.id = id;
        this.name = name;
        this.price = price;
        this.engine = engine;
    }
}
let b1 = new Bike(34,"Royal Enfield",290000,"350 cc")
console.log(b1);