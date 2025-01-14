//File operation using async and await
const fs=require('fs').promises
// let readData=async()=>{
//     let data=await fs.readFile('./demo.txt', 'utf-8')
//     console.log(data);
    
// }
// readData();

//let writeData = async()=>{
//    await fs.writeFile('./demo1.txt', 'Nodejs')
//    console.log("file is created");  
//}
//writeData();


//append
// let appendData = async () => {
//     await fs.appendFile('./demo1.txt', 'This is appended text.\n', 'utf-8');
//     console.log('Data appended successfully!');
//   };
// appendData();



//rename
// let renameFile = async () => {
//     await fs.rename('./demo1.txt', './demo2.txt');
//     console.log('File renamed successfully!');
//   };
// renameFile();



//delete
let unlinkFile = async () => {
         await fs.unlink('./demo2.txt');
         console.log('File delete successfully!');
       };
    unlinkFile('./demo2.txt');