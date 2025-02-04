//Express
//minimalistic web framework for Node.js
//Express follows the Model-View-Controller structure
//express is a minimalistic web framework of Node.js
//express it is a popular node js framework for web application
//express follows the Model-View-Controller architecture pattern
//top companies like ibm, twitter, amazon, google are using express to built applications
//it will improve the communication between  the client and server
//How to create server using Express
// const express = require('express');
// const app = express();
// app.get('/',(req,res)=>{
//     res.send('Hello Express');
// })
// app.listen(5000,err=>{
//     if(err) throw err;
//     console.log('Server is running on port 5000');
// })


//how to route in express
// const express = require('express');
// const app = express();

// app.get('/',(req,res)=>{
//     // res.writeHead(200,{'content-type':'text/plain'});
//     res.send('Home page');
// })
// app.get('/Home',(req,res)=>{
// //    res.writeHead(200,{'Content-type':'text/plain'});
//     res.send('Home page');
// })
// app.get('/About',(req,res)=>{
//     // res.writeHead(200,{'content-type':'text/plain'});
//     res.send('About page');
// })
// app.get('/Contact',(req,res)=>{
//     // res.writeHead(200,{'content-type':'text/plain'});
//     res.send('Contact page');
// })
// app.get('/Login',(req,res)=>{
// // res.writeHead(200,{'content-type':'text/plain'});
//     res.send('Login page');
// })
// app.listen(5000,err=>{
//     if(err) throw err;
//     console.log('Server is running on port 5000');
// })


// const express = require('express');
// const app = express();
// const fs = require('fs');
// const mongodb = require('mongodb').MongoClient;
// let collection;

// let connectDb = async () => {
//     let connection = await mongodb.connect('mongodb://localhost:27017');
//     let database = await connection.db('user');
//     collection = await database.collection('data');
// }
// connectDb();

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.get('/', (req, res) => {
//     res.send(` 
//         <form action="/submit" method="post">
//         <fieldset>
//             <legend>User Info</legend>
//             <label for="username">Username:</label>
//             <input type="text" name="username" id="username"><br><br>
//             <label for="password">Password:</label>
//             <input type="password" name="password" id="password"><br><br>
//             <button type="submit">Submit</button>
//         </fieldset>
//     </form>`);
// });

// app.post('/submit', async (req, res) => {
//     console.log(req.body);
//     await collection.insertOne(req.body);
//     res.send('Data has been submitted');
// });

// app.get('/user', async (req, res) => {
//     let payload = await collection.find({}).toArray();
//     let output = "";
    
//     payload.forEach(user => {
//         output += `
//         <h3>UserName: ${user.username}</h3>
//         <p>Password: ${user.password}</p>
//         `;
//     });

//     res.send(output);
// });

// app.listen(5000, () => {
//     console.log('Server is running on port 5000');
// });

const { MongoClient, Collection } = require('mongodb');

let connectDb = async()=>{
    const connection =  new MongoClient('mongodb://127.0.0.1:27017');
    await connection.connect();

    console.log('connected');
    const db = connection.db('demo_db_again');
    console.log('db createed');
    let collection=db.createCollection('student_school');
    console.log('collection created');
}

connectDb();






const http=require('http');
const server=http.createServer((req,res)=>{
    
    res.end('server is running on port 5000');
})



server.listen(5000,err=>{
    if (err)
    console.log('server is running on port 5000');
})


//Middleware
// const express =require('express')
// const app = express()
// app.use((req,res,next)=>{
//     console.log("Middleware 1");
//     next()
    
// })
// app.use((req,res,next)=>{
//     console.log("Middleware 2");
//     next()
    
// })
// app.get('/',(req,res)=>{
//     res.send("Hello Express")
// })
// app.listen(5000,err=>{
//     if (err) throw err;
//     console.log("Server is running on 5000");
    
// })
// const express = require('express');
// const mongodb = require('mongodb').MongoClient
// let connectDb = async()=>{
//   let connection = await mongodb.connect('mongodb://localhost:27017');
//   let database = await connection.db('user');
//   let collection = await database.createCollection('job');
// }
// connectDb()
// // const path = require('path');
// // const fs = require('fs');
// const app = express();


// app.set(path.join(__dirname));
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.urlencoded({ extended: true }));

// app.get('/', (req, res) => {
//   const stream = fs.createReadStream(path.join(__dirname, 'home.html'));
//   stream.pipe(res);
// });

// app.get('/login', (req, res) => {
//   const stream = fs.createReadStream(path.join(__dirname, 'login.html'));
//   stream.pipe(res);
// });

// app.get('/contact', (req, res) => {
//   const stream = fs.createReadStream(path.join(__dirname, 'contact.html'));
//   stream.pipe(res);
// });

// app.get('/about', (req, res) => {
//   const stream = fs.createReadStream(path.join(__dirname, 'about.html'));
//   stream.pipe(res);
// });
// Start the server
// app.listen(3000, err => {
//   if (err) throw err;
//   console.log(`Server is running on port 3000`);
// });
