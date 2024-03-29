/* ....... Most Important .... */
/* ....... index.js-> routes-> controllers -> services -> Repo .... */

const express=require('express')
const mongoose=require('mongoose')
const fs=require('fs')

// Routes Layer
const bookRoute=require('./Routes/bookRoute');
const defaultRoute=require('./Routes/defaultRoute')
const productRoute=require('./Routes/productRoute')

/* ....... Porting it on 3000  .... */
const app=express();
const port =3000;
app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})

app.use(express.json());
app.use('/',defaultRoute)
app.use(bookRoute)
app.use('/api/v1',bookRoute)
app.use(productRoute)
app.use('./api/v1/products',productRoute)