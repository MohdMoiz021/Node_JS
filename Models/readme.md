For Models layer

for product Control we need to define a schema or model in models folder

where we have to define schema so that what all values we are putin there 
have to followed by productCtrl 

required is mandatory fields




Product Repo


const remove=(id)=>{
    return Product.deleteOne({_id:id})
}

const update=(id,payload)=>{
    return Product.updatedOne({_id:id},payload)
}

ProductCtrl

const remove=async(req,res)=>{
    try{
        const id=req.params.id;
        await productRepo.remove(id);
        res.status(204);
        res.send()
    }
    catch(error){
        res.status(500);
        res.send('Internal Server error')
    }
}


const put=async(req,res)=>{
    try{
        const id=req.params.id;
        await productRepo.update(id,req.body);
        res.status(204);
        res.send()
    }catch(error){
        res.status(500)
        res.send('Internal Server error')
        }
}


brand:{
        type:String,
        required:true,
    },
    model:String,
    price:{
        type:Number,
        required:[true,'Price must be provided'],
    },
    instock:{
        type:Boolean,
    },
    discount:{
        type:Number
    },
    createdDate:{
        type:Date,
        default:Date.now()
    },
   
    updatedDate:{
        type:Date,
        default:Date.now
    }