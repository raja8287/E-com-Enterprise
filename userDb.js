const mongoose=require('mongoose');
const { config } = require('dotenv');
config({path:"./.env"})
const url=process.env.con;
mongoose.connect(url);

const ProductSchema=new mongoose.Schema({
    Userimg:String,
    UserName:String,
    Pass:String,
})
module.exports=mongoose.model("userinfo",ProductSchema);