const Product=require('../Models/productModel');

const get=()=>{
    return Product.find({},{__v:0})
}

const getById=(id)=>{
    return Product.findById(id,{__v:0})
}

const create=(body)=>{
    const product=new Product(body);
    return product.save();
}



module.exports={
    get,
    getById,
    create,
}