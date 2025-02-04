const http = require('http')


const {MongoClient} = require('mongodb');



let server = http.createServer(async (request, response)=>{
    let connection = await MongoClient.connect('mongodb://localhost:27017')
    console.log('connected to mongodb');
    let db = await connection.db('demo_school');
    console.log("db created");
    let collection = await db.collection('students');
    console.log('collection created');

    
})

server.listen(5000, (err)=>{
    if (err) throw err;
    console.log('server is running on port 5000');
    
})