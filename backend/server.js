const express = require("express");
const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

const app = express();

const MONGOOSE_URL = process.env.MONGO_ID;

const PORT = process.env.PORT ||8080;

app.get("/",(req,res)=>{
    res.send({msg:"Connected to E-comerce backend successfully...!"});
})

mongoose.connect(MONGOOSE_URL)
.then((check)=>{
    app.listen(PORT,()=>{
        console.log("Connected to the server....");
    })
}).catch((error)=>{
    console.log("Something went wrong while connecting to server....",error);
})

