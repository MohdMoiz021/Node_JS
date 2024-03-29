const Product = require('../Models/productModel');

const get = (req, res) => {
    Product.find()
        .then(data => {
            res.status(200);
            res.json(data);
        })
        .catch(err => {
            res.status(500);
            res.send('Internal Server Error');
        });
    }
// const getById=async(req,res)=>{
//     const id=req.params.id;
//     const data=await productRepo.getById(id);
//     if(!data){
//         res.status(201);
//         res.send('Created')
//     }else{
//         res.status(200);
//         res.json(data)
//     }
// }

// const post=async(req,res)=>{
//     try{
//         const{body}=req;
//         console.log(error);
//         await productRepo.create(body)
//         res.status(201);
//         res.send('Created')
//     }catch(error){
//         res.status(500);
//         res.send('Internal Server Error')
//     }
// }

const getById = async (req, res) => {
    const id = req.params.id;
    const data = await Product.findById(id, { __v: 0 });
    if (!data) {
        res.status(404);
        res.send('Not found')
    } else {
        res.status(200);
        res.json(data);
    }
};

const post = async function (req, res) {
    try {
        const { body } = req;
        const product = new Product(body);
        await product.save();
        res.status(201);
        res.send('Created');
    } catch (err) {
        res.status(500);
        res.send('Internal server error');
    }
}



module.exports={
    get,
    post,
    getById,
  
}