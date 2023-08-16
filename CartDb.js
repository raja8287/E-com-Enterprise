const mongoose=require("mongoose");
const url="mongodb://localhost:27017/product";
mongoose.connect(url);

const CartSchema=new mongoose.Schema({
    UserName:String,
    Qnt:Number,
    UserId:String,
    UserData:{}
})

module.exports=mongoose.model("usercart",CartSchema);