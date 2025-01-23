// 
// let arr = [1200, 1300, 400, 2300, 1500]
// let incrementedArr = arr.map(value => value * 1.5);

// console.log(incrementedArr);
let fs=require('fs').promises;
let readFile=async()=>{
    let data=await fs.readFile('hello.js','utf-8');
    console.log(data);
    
}
readFile();