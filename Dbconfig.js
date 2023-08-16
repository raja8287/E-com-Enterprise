const mongoose=require('mongoose');
const url="mongodb://localhost:27017/product";
mongoose.connect(url);

const ProductSchema=new mongoose.Schema({
    product_link:String,
    product_name:String,
    product_dis:String,
    product_price:Number,
    product_type:String
})
module.exports=mongoose.model("productdata",ProductSchema);