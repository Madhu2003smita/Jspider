//Read a file
// const fs = require('fs')
// fs.readFile('./demo.txt','utf-8',(err,data)=>{
//     if(err) throw err ;
//     console.log(data)
// })

//Write a file
//fs.writeFile('./demo1.txt',data,err =>{
//  if(err) throw err;
//console.log("data is write")
//})


//Read and write a file
// fs.readFile('./demo.txt','utf-8',(err,data)=>{
//     if(err) throw err ;
//fs.writeFile('./demo1.txt',data,err =>{
//  if(err) throw err;
//console.log("data is written")
//})
//})

const fs = require('fs');
// Data to append
// const data = 'This is the new data to append.\n';
// // File path
//  const filePath = 'example.txt';
// // Append to the file asynchronously
// fs.appendFile(filePath, data, (err) => {
//    if (err) {
//       console.error('Error appending data:', err);
//         } else {
//   console.log('Data successfully appended to the file.');
//     }
//   });


//Specify the old file path and the new file path
//const oldPath = './oldFileName.txt';
//const newPath = './newFileName.txt';

// file rename
//   fs.rename('./example.txt', './example1.txt', (err) => {
//        if (err) {
//            console.error('Error renaming file:', err);
//           return;
//               }
//  console.log('File renamed successfully!');
//    });





// Path to the file to be deleted
//const filePath = './example.txt';

// // Asynchronously delete the file
// fs.unlink('./example1.txt', (err) => {
//   if (err) {
//     console.error('Error deleting file:', err.message);
//   } else {
//     console.log('File successfully deleted');
//   }
// });


//Folder operation
//Create a nested folder
// fs.mkdir('./Nodejs',(err)=>{
//   console.log("folder is created");
//   fs.mkdir('./Nodejs/Express',err=>{
//     console.log("nested folder is created");
//     fs.writeFile('./Nodejs/Express/express.js',"",(err)=>{
//       if(err) throw err;
//       console.log("file is created");
      
//     })    
//   })  
// })


