const router =require('express').Router()
const User=require("../models/userschema")
const bodyparser=require('body-parser')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const cookie =require('cookie')
router.use(bodyparser.json());
router.post("/signin",async(req,res)=>{
    try{
        const name=req.body.name;
        const pass=req.body.password
        const bcryptpass=await bcrypt.hash(pass,10)
        const check=await User.findOne({username:name})
        console.log(check)
        if(!check){
            const user=new User({username:name,password:bcryptpass})
            const result=await user.save()
            res.status(201).send("user created")
        }
        else{
            console.log("user already exits")
            res.send("user already exits")}
    }
    catch(err){
    console.log(err)
    }
    })
router.post("/login",async(req,res)=>{
const name=req.body.name
const pass=req.body.password
try{
const check=await User.findOne({username:name})

    if(!check){
   return res.send("!user")
    }
  const valid=bcrypt.compare(pass,check.password)
   if(valid){
    const token=jwt.sign({User:check.username},"private-key")
    //    res.cookie("user",token,{httpOnly:true}).send("valid")
       res.status(201).send("valid")
   }
   else{
     return res.status(203).send("Password doesnt match")
   }
}
catch(err){
    res.send(err)
}

})
module.exports = router;