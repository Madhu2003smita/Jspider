const mongodb=require('mongodb').MongoClient
const http=require('http')
const server=http.createServer((req,res)=>{
    let connectDb=async()=>{    
        let connection=await mongodb.connect('mongodb://localhost:27017')
        console.log('database connected');
        let database=await connection.db('Node_12PM')
        console.log('database created');
        let collection=await database.createCollection('Node_12PM') 
        console.log('collection created');
                       
}
connectDb()
})
server.listen(5000,err=>{
    if (err) throw err;
    console.log('server is running on port 5000');
    
})