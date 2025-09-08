// require('dotenv').config({path:'./.env'});  Just for learning purpose we are not removing the comment
import dotenv from 'dotenv';
import express from 'express';
import connectDB from './db/index.js';

dotenv.config({
    path:'./.env'
})

const app = express();

connectDB();
const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log(`my app is running on this port ${PORT}`);
})

app.get('/',(req,res)=>{
    res.send("Hello World from my express app");
})