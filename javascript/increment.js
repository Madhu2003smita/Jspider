// let arr = [1200, 1300, 400, 2300, 1500];
// let incrementArr = arr.map(value => value+(value * 50/100));
// console.log(incrementArr);


// let array = []; 
//    for (let i = 1; i <= 100; i++) {
//         array.push(i); 
//   }
// console.log(array);



// let number=array.filter((num)=>{
//          return num%10==9;
// })
// console.log(number);



// let number=array.filter((num)=>{
//     return num%2==0&& num<=18;
// })
// console.log(number)



// let num=array.filter((number)=>{
//     return number<=50;
// })
// console.log(num);


// let perfect=array.filter((num)=>{
//     let fact=0
//  for(i=1;i<num;i++){
//       if(num%i==0){
//          fact=fact+i;
//             }
//     }
//     return (num==fact);
// })
// console.log(perfect);



// let num=30;
// let fact=0
// for(i=1;i<num;i++){
//      if(num%i==0){
//         fact=fact+i;
      
//      }
 
//    }
//    console.log(fact);
//    console.log(fact==num);
   
 

// let age=[30,40,20]
// let total= age.reduce((n,i)=>
//     i=i+n,0
// )
// console.log(total);


//let fruits=['apple','banana','mango','orange'];
// fruits.splice(2,0,'grapes');
// console.log(fruits);

// fruits.splice(2,3);
// console.log(fruits);

// fruits.splice(2,3,'grapes','kiwi');
// console.log(fruits);



// let res = [10, 20, 30, 11, 21, 31];
// let evenNumbers = res.filter((num) => {
//     if (num % 2 === 0) {
//         return true;
//     }
//     return false;
// });
// let oddNumbers = res.filter((num) => {
//     if (num % 2 !== 0) {
//         return true;
//     }
//     return false;
// });
// console.log("Even numbers:", evenNumbers);
// console.log("Odd numbers:", oddNumbers);



// let arr1=[10,20,40];
// let arr2=[47,23,13];
// console.log(...arr1,...arr2);


// function outerFunction(){
//     let count=0;
//     function innerFunction(){
//         count++;
//         console.log(count);;
//     }
//     return innerFunction;
// }
// const closure=outerFunction();
// closure();
// closure();



// const myPromise=new Promise((resolve,reject)=>{
//     let success=true;
//     if(success){
//         resolve('promise is fulfilled');
//     }else{
//         reject('promise is rejected');
//     }
// });
// myPromise
// .then((message)=>{
//     console.log('success:',message);
// })
// .catch((error)=>{
//     console.log('error:',error);
    
// });


// console.log(a);
// console.log(b);
// let a=20;
// var b=30;


//console.log(typeof NaN);  // "number"


// let obj={
//     name:'john',
//     age:20,
//     city:'bangolore',
   
// };
// delete obj.name;

// obj.education='Btech';
// console.log(obj);


//first order function
// function add(a,b){
//     return a+b;
//     console.log(a+b);
// }
// add()
// console.log(add(10,20));


//arrow function
// let add=(a,b)=>{
//     console.log(a+b);
//     return a+b;
// }
// let c=add(10,20);




//function with constructor
// function Emp(id,ename,sal){
//      this.id=id;
//      this.ename=ename;
//      this.sal=sal;
//  }
//  let e1=new Emp(101,'madhu',20000);
//  console.log(e1);


// let arr=[3,4,5,6];
// arr.slice(0,3);
// console.log(arr);


//let arr=['hi',true,21];
//arr.push('hello');['hi',true,21,'hello']
//arr.pop();['hi',true]
//arr.shift('hello');[true,21]
//arr.unshift('hello');['hello','hi',true,21,]
//arr.reverse();[21,true,'hi']

// let a=arr.toString();>hi,true,21
//let a=arr.join("~");hi~true~21

//let a=arr.includes(21);true
//let a =arr.indexOf(21);2
//let a=arr.lastIndexOf(21);2
//console.log(a);



// console.log(arr);


// function greet(name) {
//     return `Hello, ${name}!`;
//   }
//   console.log(greet("Alice")); // Hello, Alice!
  

// const ol = document.createElement('ol');
// const items = ['Apple', 'Banana', 'Cherry', 'Date'];
// items.forEach(item => {
//   const li = document.createElement('li'); 
//   li.textContent = item; 
//   ol.appendChild(li); 
// });
// document.body.appendChild(ol);


// function example(){
//     let msg='hello';
//     console.log(msg);
// }
// console.log(msg);

// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((number) => {
//     console.log(number);
// });


