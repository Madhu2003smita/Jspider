// 1. from
// const buff = Buffer.from("hello World");
// console.log(buff.toString());//hello world


// 2. alloc(serialize, value/fill)

// const buff = Buffer.alloc(100, 'Hello World');
// console.log(buff.toString());


//const buff = Buffer.alloc('Hello World');
//console.log(buff.toString());

// const buff = Buffer.alloc(101);
// console.log(buff);

 

// const buff = Buffer.alloc(10)
// buff.write('hello')
// buff.fill('hello')
// console.log(buff);
// console.log(buff.toString());

// 3.isbuffer(buffer variable)


// const buff = Buffer.from("node.js")
// const buff2= 'Nodejs'
// console.log(Buffer.isBuffer(buff));
// console.log(Buffer.isBuffer(buff2));


//4.length

// const buff = Buffer.from('hello')
// console.log(buff.length);



// const buff = Buffer.alloc(100, 'hello')
// console.log(buff.length);


// 5.slice (startIndex, endIndex)
// const buff= Buffer.from('hello wrold');
// console.log(buff.toString());
// console.log(buff.slice(0,5).toString());