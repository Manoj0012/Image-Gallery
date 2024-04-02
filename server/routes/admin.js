const router=require('express').Router()
const User=require('../models/userschema')
const bodyparser=require('body-parser')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const {Auth}=require('../utils/middleware')
router.use(bodyparser.json());
router.get("/mypost",(req,res)=>{
    res.send("admin node")
})
router.post("/addadmin",async(req,res)=>{
    try{
        console.log(req.body)
        const name=req.body.Name;
        const pass=req.body.password;
        const role="admin";
        const bcryptpass=await bcrypt.hash(pass,10)
        const check=await User.findOne({username:name})
        console.log(check)
        if(!check){
            const admin=new User({username:name,password:bcryptpass,role:role})
            const result=await admin.save()
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
router.get("/manageuser",async(req,res)=>{
    const userdata=await User.find({})
    res.json(userdata)
    console.log(userdata)
})
router.post("/manageuser/delete",async(req,res)=>{
    var profileid=req.body
    console.log(profileid)
    // const userdata=await User.deleteOne({})
    res.status(201).send("Profile delete")
})
module.exports=router;