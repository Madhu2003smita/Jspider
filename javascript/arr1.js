// let arr = [12,34,121,1,2,231,23];
// let a1 = arr.sort((a,b)=>{
//    // return a - b;
//    return b - a;
// })
// console.log(a1);
function parent(){
    let age = 20;
    function child(){
        age++;
        console.log(age);
        
    }
    return child();
}
parent()