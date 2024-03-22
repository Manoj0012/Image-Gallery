const express =require("express")
const bd =require("body-parser")
const cors=require("cors")
const app=express();
const cookieparser = require('cookie-parser')
app.use(cookieparser());
const bodyparser=require('body-parser')
const mongo=require("mongoose")
const{Auth}=require('./utils/middleware')
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
app.use("/user",require('./routes/user'))
app.use("/admin",require('./routes/admin'))
app.use("/post",require('./routes/post'))
mongo.connect("mongodb://localhost:27017/photoholic")
.then(()=>{console.log("database connected")})
.catch((err)=>{console.log(err)})
app.listen(9000,()=>{
    console.log("http://localhost:9000")
});