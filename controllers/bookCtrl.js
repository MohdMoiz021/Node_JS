const booksDB=[{
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
}];

const books=(req,res)=>{
    res.json(booksDb)
}

const getById=(req,res)=>{
    const id=parseInt(req.params.id)

const filterFn=(elem)=>{
    return elem.id===id;
}
const filteredBooks=booksDb.filter(filterFn);

if(filteredBooks[0]){
    res.status(200);
    res.json(filteredbooks[0]);
}else{
    res.status(400)
    res.send('Not Found')
}
};

module.exports={
    books,
    getById,
    
}