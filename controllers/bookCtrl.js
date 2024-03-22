// Creating a Hard Coded Database for testing it on the local host
/* .......Books 
 Books By Id 
 Create New Book
 Update Book
 Delete Book
 Patch Book
 Get By Id
 Get all books

.... */

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

const authors=(req,res)=>{
    const items=['james','bob']
    res.json(items);
  
}

const isInvalid=(body)=>{
    return !body.name || !body.price || !body.author; 
}

/* ....... Posting New Books .... */

const post=(req,res)=>{
    const{body}=  req

    if(isInvalid(body)){
        res.status(400)
        res.send('Bad request')
    }else{
        booksDb.push(body);
        res.status(201);
        res.send('Created')
    }
};

const remove=(req,res)=>{
    const id=+req.params.id;

    for(let i=0;i<booksDb.length;i++){
        if(booksDb[i].id===id){
            booksDb.splice(i,1)
            break;
        }
    }
    res.status(205)
    res.send();
}


/* ....... Exporting Books to access in the database .... */
module.exports={
    books,
    getById,
    authors,
    post,
    remove,
    };