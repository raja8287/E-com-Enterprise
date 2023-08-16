const mongoose=require('mongoose');
const url="mongodb://localhost:27017/product";
mongoose.connect(url);

const ProductSchema=new mongoose.Schema({
    Userimg:String,
    UserName:String,
    Pass:String,
})
module.exports=mongoose.model("userinfo",ProductSchema);