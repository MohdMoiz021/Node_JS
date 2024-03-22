const express=require('express')
const mongoose=require('mongoose')
const fs=require('fs')

// Routes Layer
const bookRoute=require('./Routes/bookRoute');


const app=express();
const port =3000;
app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})

app.use(express.json());
app.use('/api/v1/books',bookRoute)