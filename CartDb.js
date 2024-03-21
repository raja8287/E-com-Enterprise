const mongoose=require("mongoose");
const { config } = require('dotenv');
config({path:"./.env"})
const url=process.env.con;
mongoose.connect(url);

const CartSchema=new mongoose.Schema({
    UserName:String,
    Qnt:Number,
    UserId:String,
    UserData:{}
})

module.exports=mongoose.model("usercart",CartSchema);