const express=require('express')
const mongoose=require('mongoose')
const fs=require('fs')

// Routes Layer
const defaultRoutes=require('./Routes/defaultRoute')
const bookRoute=require('./Routes/bookRoute');
const productRoutes=require('./Routes/productRoute')
const userRoutes=require('./Routes/userRoute')

const app=express();
const port =3000;
app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})

app.use(express.json());
app.use('./api/v1/books',bookRoute)