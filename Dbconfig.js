const { config } = require('dotenv');
const mongoose=require('mongoose');
config({path:"./.env"})
const url=process.env.con;
mongoose.connect(url);

const ProductSchema=new mongoose.Schema({
    product_link:String,
    product_name:String,
    product_dis:String,
    product_price:Number,
    product_type:String
})
module.exports=mongoose.model("productdata",ProductSchema);