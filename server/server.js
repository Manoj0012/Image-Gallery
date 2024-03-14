const express =require("express")
const bd =require("body-parser")
const cors=require("cors")
const app=express();
const mongo=require("mogoose")
app.use(express.json())
app.use(cors())
app.use("user/",require('./routes/user'))
app.use("user/post",require('./routes/post'))
app.get("/",async(req,res)=>{
console.log("hello");
res.send("hi")
})
app.listen(9000,()=>{
    console.log("http://localhost:9000")
});