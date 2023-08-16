const mongoose=require('mongoose');
const url="mongodb://localhost:27017/product";
mongoose.connect(url);

const OrderSchema=new mongoose.Schema({
    Order:{},
    Totalp:Number,
    UserName:String,
    Usid:String,
    Address:String,
    CustPhone:Number,
    Orderstatus:String,
    Date:String,
    time:String
})
module.exports=mongoose.model("Orderinfo",OrderSchema);