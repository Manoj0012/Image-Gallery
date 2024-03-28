const router =require('express').Router()
const User=require("../models/userschema")
const bodyparser=require('body-parser')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const {Auth}=require('../utils/middleware')
router.use(bodyparser.json());
router.post("/signin",async(req,res)=>{
    try{
        const name=req.body.name;
        const pass=req.body.password
        const role="user"
        const bcryptpass=await bcrypt.hash(pass,10)
        const check=await User.findOne({username:name})
        console.log(check)
        if(!check){
            const user=new User({username:name,password:bcryptpass,role:role})
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
   if(!valid){
    return res.status(203).send("Password doesnt match")
   }
   else{
    
    const token=jwt.sign({User:check.username},"private-key")   
    const values={role:check.role,Token:token}
       res.status(201).send(values)
   }
}
catch(err){
    res.send(err)
}

})
router.post("/check",Auth,(req,res)=>{
    res.status(201)
})

module.exports = router;