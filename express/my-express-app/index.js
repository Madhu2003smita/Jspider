// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     res.send('Hello, Express!');
// });

// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });
// Import Express
const express = require('express');

// Create an Express app
const app = express();

// Define a port
const PORT = 3000;

// Middleware to parse JSON (optional for APIs)
app.use(express.json());

// Home Route
app.get('/', (req, res) => {
    res.send('Welcome to my Express server!');
});

// Another Example Route
app.get('/hello', (req, res) => {
    res.send('Hello, World!');
});

// Route with Query Parameters
app.get('/greet', (req, res) => {
    const name = req.query.name || 'Guest';
    res.send(`Hello, ${name}!`);
});

// Route with URL Parameters
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID: ${userId}`);
});

// Post Route Example
app.post('/data', (req, res) => {
    const { name, age } = req.body;
    res.send(`Received data - Name: ${name}, Age: ${age}`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
