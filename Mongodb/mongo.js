const http = require('http');
const server = http.createServer((req, res) => {
    res.end('Server is running');
})



const mongodb= require('mongodb').MongoClient

let connectDb = async() => {
    let connection = await mongodb.connect('mongodb://localhost:27017')
    console.log('Connected to MongoDB');
    let db = await connection.db('Node_12PM')
    console.log('Database created');
    let collection = await db.collection('Employee')
    console.log('Collection created');

    //insert one
    // let Singledata = {name: 'Rahul', age: 25}
    // collection.insertOne(Singledata);
    // console.log('data inserted ', Singledata);

    // //insert many
    // let Multipledata = [{name: 'Rahul', age: 25},{name: 'Rahul', age: 25}]
    // collection.insertMany(Multipledata);
    // console.log('data inserted ', Multipledata);

    //read the data
    // let firstdata= await collection.findOne();
    // console.log('Data:', firstdata);

    //read all the data
    // let allData= await collection.find().toArray();;
    // console.log('All Data:', allData);

    //update single data
    // let updateData = {name: 'Rahul', age: 25}
    // let newdata = {name: 'Rahul', age: 26}
    // collection.updateOne(updateData, {$set: newdata});

    // console.log(await collection.find().toArray());
    
    
    //update many data based on condition
    // let updateAllData = {name: 'Rahul'}
    // let newAllData = {name: 'kunal'}
    // collection.updateMany(updateAllData, {$set: newAllData});


    //adding the same data for all the collection
    // let newdata = {height: 5.8}
    // collection.updateMany({},{$set: newdata})
    
    // console.log(await collection.find().toArray());
    
    
    //delete one data
    // let val = {age:25}
    // collection.deleteOne(val);
    
    // console.log(await collection.find().toArray());

    //delete all the data
    collection.deleteMany({});
    console.log(await collection.find().toArray());
    


}

connectDb();

server.listen(3000, () => {
    if(err){
        console.log('Error:', err);
    }    
    console.log('Server is running on port 3000');
})
    
    