// let arr = [12,2343,3435,23,6]
// let [a,b,c,d,e] = arr;
// console.log("value of a is : " + a);
// console.log("value of a is : " + b);
// console.log("value of a is : " + c);
// console.log("value of a is : " + d);
// console.log("value of a is : " + e);


let student = {
    id : 123,
    name : 'abc',
    phone : 234567886434,
    email : 'abc@gmail.com'
}
// let {name,phone,id} = student;
// console.log(id);
// console.log(name);
// console.log(student.email);



let id = 0;
function change(){
    ++id;
    let name = document.createElement('h1');
    let phone = document.createElement('h2');
    let hr = document.createElement('hr');
    let demo =document.querySelector('.demo');
    console.log(name,phone,demo);
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then ((res)=>{
        res.json()
        .then((data)=>{
            console.log(data);
            name.innerHTML = "The name : "+data.name;
            phone.innerHTML ="contact : "+ data.phone;
            demo.append(name,phone,hr);
        })
        .catch((err)=>{
            console.log(err);
    }) 
})
.catch((err1)=>{
    console.log(err1);
})
}
