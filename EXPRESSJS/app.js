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
// app.use(express.urlencoded({extended:true}));
// app.get('/',(req,res)=>{
//     res.send(` 
//         <form action="/" method="post">
//         <fieldset>
//             <legend>User Info</legend>
//             <label for="username">username:</label>
//             <input type="text" name="username" id="username"><br><br>
//             <label for="password">password</label>
//             <input type="password" name="password" id="password"><br><br>
//             <button type="submit">Submit</button>
//         </fieldset>
//     </form>`
// )
// })
// app.post('/',(req,res)=>{
//     console.log(req.body);
//     res.send('Data has been submitted');
// })
// app.listen(5000,err=>{
//     if(err) throw err;
//     console.log('Server is running on port 5000');
// })



const express = require('express');
const path = require('path');

const app = express();

// Set the view engine to serve static HTML files
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true })); // To handle form data

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname,'contact.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
