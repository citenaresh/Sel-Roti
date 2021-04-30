//importing all the required libraries needed
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');

//calling express and setting it up 
const app=express();
app.use(express.json());

//setting up server file for static content which will be 
//generated in React production
if(process.env.NODE_ENV==='production'){
    app.use(express.static('client/build'));
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    });
}

//configuration to connect to the database (MongoDB)
const dbURI=config.get('dbURI');
const port=process.env.PORT || 4000;
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true})
.then((result)=>app.listen(port))
.catch((err)=>console.log(err));
