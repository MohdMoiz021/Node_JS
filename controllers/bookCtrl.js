// Creating a Hard Coded Database for testing it on the local host


/* ........ Creating Books (Hard Coded) .....   */
const booksDb=[{
    id:1,
    name:'clean code',
    rating:4,
    author:'Aston Martin',
    price:50
},
{
    id:2,
    name:'clean code',
    rating:4.5,
    author:'Aston Martin',
    price:70
},
{
    id:3,
    name:'clean code',
    rating:5,
    author:'Mohd Moiz',
    price:90
}];



/* ....... Getting All books Using Const Books .... */
const books=(req,res)=>{
    res.json(booksDb)
}


/* ....... Getting All books Using particular ID  .... */
const getById=(req,res)=>{
    const id=parseInt(req.params.id)
/* ....... Filtering All books Using Filter Function .... */
const filterFn=(elem)=>{
    return elem.id===id;
}
const filteredBooks=booksDb.filter(filterFn);
if(filteredBooks[0]){
    res.status(200);
    res.json(filteredBooks[0]);
}else{
    res.status(400)
    res.send('Not Found')
}
}

/* ....... Exporting Books to access in the database .... */
module.exports={
    books,
    getById,
    };