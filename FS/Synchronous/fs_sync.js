//FS: File System
// It is a in-built module present in nodejs
// It is used to perform file operations on the files which are present in the system.
// Step :1 Import fs module
const fs = require('fs')

//File operations in Synchronous


//Read a File
//let data = fs.readFileSync('./demo.txt','utf-8')
//console.log();

//Write a File
//When file is already present
// fs.writeFileSync('./demo2.txt','I am writing in this file')
// console.log("Writing is done");


//Case 2: When file and data is already present
// fs.writeFileSync('./demo2.txt','Node js')
// console.log("Writing is done");


//Case 3: When there is no file
// fs.writeFileSync('./demo3.txt','Node js')
// console.log("Writing is done");




//Append a File
//fs.appendFileSync('path','data')

//When file is already present
//fs.appendFileSync('./demo2.txt','I am writing in this file')
//console.log("appending is done");




//Case 2: When file and data is already present
// fs.appendFileSync('./demo2.txt','Node js')
// console.log("appending is done");



//Case 3: When there is no file
// fs.appendFileSync('./demo3.txt','Node js')
// console.log("Writing is done");


//Rename a file
//fs.renameSync('oldfile','newFileName')

// fs.renameSync('./demo3.txt','mern.txt')
// console.log("Writing is done");



//We can change file extension
//fs.renameSync('./demo3.txt','app.js')
//console.log("Writing is done");


//Delete a file
//fs.unlinkSync('mern.txt')



// //Create a folder
// fs.mkdirSync('./Node.js')
// console.log("folder created");

// //created a nested folder
// fs.mkdirSync('./Node.js/Express')
// console.log('created nested folder');

// //created a file inside nested folder
//fs.writeFileSync('./Node.js/Express/express.js',"");
//console.log("file created inside nested folder");


//created file inside nested folder
//fs.writeFileSync('./Node.js/nodejs.txt',"")
//console.log('nested file is created');

//crate a file inside nested folder if folder in not present
//fs.mkdirSync('./Express/Nodejs/mongodb', {recursive:true})
//console.log("Nested File is created");


//rename folder
//fs.renameSync('./Express','./FrameWork')
//console.log("File is renamed");


//rename folder
//fs.renameSync('./Framework','./Express')
//console.log("File is renamed");

//rename folder
//fs.renameSync('./Express/Node.js','./Express/RTE')
//console.log("File is renamed");


//delete a folder
//fs.rmdirSync('./RTE/mongodb')
//console.log("File is deleted");

//delete a file present inside another folder
//fs.unlinkSync('./Node.js/nodejs.txt')
//console.log("File is deleted");

//delete a folder
//fs.rmdirSync('./RTE');
//console.log("File is deleted");


