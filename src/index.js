// require('dotenv').config({path:'./.env'});  Just for learning purpose we are not removing the comment
import dotenv from 'dotenv';
import connectDB from './db/index.js';
import { app } from './app.js';

dotenv.config({
    path:'./.env'
})

const PORT = process.env.PORT;

connectDB()
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running on PORT ${PORT}`);
    })
    app.on('error in app.on',(error)=>{
        console.log('This is the error i am getting from app.on',error);
        
    })
})
.catch((error)=>{
    console.log('This is error from catch block of connectDB',error);
})

