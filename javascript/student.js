let student = {
    id : 100,
    name : "madhu",
    marks :[15,350],
    subject : {Web : 80, Java : 80},
    isPresent : true
}
//get
console.log(student.name);
console.log(student);
console.log(student.marks);
console.log(student.subject.Java);

//edit
student.isPresent = false;
console.log(student);

//add
student.age = "20";
console.log(student);

//delete
delete student.marks
console.log(student);



