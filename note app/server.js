const express= require('express')
const mongoose = require("mongoose")
const {PORT,MONOGODB_URI}=require('./config/config')
const app = express()

let connectDb=async()=>{
    await mongoose.connect(MONOGODB_URI)
    console.log("Database Connected");
    
}
connectDb()
app.get('/',(req,res)=>{
    res.send("Home Page")
})
app.listen(PORT, err=>{
    if (err) throw err;
    console.log("Server is running  on 5000");
    
})