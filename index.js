//const something = require('somelibary')

const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();


//po.then().catch(err=>{});

//Promise chain
//1. Function defination
async function anil() {

    //Every function return something
    //await PO
    return await mongoose.connect('mongodb+srv://oklabs:letmein123321@oklabsmongodbserver.dgmru.mongodb.net/?retryWrites=true&w=majority');//Connection string
}

//2. Function calling
anil().then((d)=>{
    console.log('Connected');
}).catch(err => console.log(err));





let port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log('listening on port ' + port)
});