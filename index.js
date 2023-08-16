const express=require('express');
const app=express();
const port=process.env.port ||4000;
const cors=require('cors');
const Dm=require('./Dbconfig');
const UserMo=require('./userDb');
const cartdb=require('./CartDb');
const orderdb=require('./OrderDb');
app.use(cors())
app.use(express.urlencoded({extended:true}));
app.use(express.json({limit: '500mb'}));
app.use(express.urlencoded({limit: '500mb'}));


app.get('/',async(req,resp)=>{
    let data= await Dm.find();
//    console.log(data);
    resp.send(data)
})
app.get('/userdata',async(req,resp)=>{
    let data= await UserMo.find();
    resp.send(data)
})
//for user cart info
app.get("/:key",async(req,resp)=>{
  //  console.log(req.params.key)
    let data=await cartdb.find({UserId:req.params.key}
     
      )
    resp.send(data)
})
//for user order
app.get("/order/:key",async(req,resp)=>{
    //console.log(req.params.key)
    let data=await orderdb.find({Usid:req.params.key})
    resp.send(data)
})
//for searching item in search bar
app.get("/home/:key",async(req,resp)=>{
    
let da=await Dm.find({product_name:req.params.key})
resp.send(da)
})


//

//for slider top selling smart phone data
app.get("/t/h" , async(req,resp)=>{
  let da=await Dm.find({product_type:"Smart phone"})
     resp.send(da);
 })



app.put('/cartput',async(req,resp)=>{
    let data= await cartdb.updateOne({UserId:req.body.upn,UserData:req.body.uI},{
        $set:{Qnt:req.body.qt}
    })
    console.log(req.body)
    resp.send("put")
})



//for delteing the item from the user cart
app.delete("/deletecartitem",async(req,resp)=>{
    console.log(req.body)
    let data= await cartdb.deleteOne({_id:req.body.cartitem})
    resp.send("delete")
})
// for deleting the whole cart 
app.delete("/deletecart",async(req,resp)=>{
    console.log(req.body)
    let data=await cartdb.deleteMany({UserId:req.body.cart})
    resp.send("whole delete cart")
})



app.post("/postuser",async(req,resp)=>{
   // console.log(req.body)
    UserMo.create({
        Userimg:req.body.userimg,
        UserName:req.body.username,
        Pass:req.body.userpass,
    })
    resp.send("posted user")
})
app.post("/addtocart",async(req,resp)=>{
  //  console.log(req.body)
        cartdb.create({
            UserName:req.body.uname,
            Qnt:req.body.uq,
            UserId:req.body.uId,
            UserData:req.body.udata.use
        })
    resp.send("add to cart")
})


app.post("/PostPro",async(req,resp)=>{
  //  console.log(req.body)
    Dm.create({
        product_link:req.body.pro_link,
        product_name:req.body.pro_name,
        product_dis:req.body.pro_dis,
        product_price:req.body.pro_pri,
        product_type:req.body.pro_type})
    

  resp.send("post")
})

//Order api
app.post("/Userorder",async(req,resp)=>{
    orderdb.create({
        Order:req.body.Orderitem,
        Totalp:req.body.tp,
        UserName:req.body.Uname,
        Usid:req.body.id,
        Address:req.body.Uadd,
        CustPhone:req.body.Custphone,
        Orderstatus:req.body.orderstate,
        Date:req.body.Dat,
        time:req.body.time

    })
    console.log(req.body.Uname)
    resp.send("geting a order request")
})

app.listen(port,()=>{
    console.log(`your api is runing on ${port}`)
})