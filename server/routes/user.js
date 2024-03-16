const router =require('express').Router()
const User=require("../models/userschema")
const bodyparser=require('body-parser')
router.use(bodyparser.json());
router.post("/signin",async(req,res)=>{
    try{
        console.log(req.body.name)
        const name=req.body.name;
        const pass=req.body.password
        const user=new User({username:name,password:pass})
        const result=await user.save()
        res.status(201).send("user created")
    }
    catch(err){
    console.log(err)
    }
    })
module.exports = router;