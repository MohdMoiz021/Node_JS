const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
    brand: { type: String },
    model: String,
    price: Number,
    inStock: Boolean,
    discount: Number,
    createdDate: Date,
    
    updatedDate: {
        type: Date,
        default: Date.now
    }

});

productSchema.index({brand:1,model:1});
module.exports=mongoose.model('Product',productSchema);