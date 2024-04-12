const router =require('express').Router()
const User=require("../models/userschema")
const bodyparser=require('body-parser')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const multer = require('multer');
const upload = multer();
const Post=require("../models/postschema")
const {Auth}=require('../utils/middleware')
router.use(bodyparser.json());

router.post("/signin",async(req,res)=>{
    try{
        const name=req.body.name;
        const pass=req.body.password
        const role="user"
        const bcryptpass=await bcrypt.hash(pass,10)
        const check=await User.findOne({username:name})
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
console.log(req.user)
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
router.post("/userpost",Auth,async(req,res)=>{
    try{
        const Owner=req.user._id
        // console.log(Owner)
        const data=await Post.find({owner:Owner})
        res.json(data)
    }
    catch(err){
        console.log(err)
    }
})

router.post("/addprofile",upload.single("image"),async(req,res)=>{
    try{
        const ImageData = {
            file_name: req.file.originalname,
            file_type: req.file.mimetype,
            file_data: `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`,
            file_size: req.file.size,
        }

         const profile=await User.findOneAndUpdate({username:req.body.name},{image:ImageData})
        const result=await profile.save();
        return res.status(201).send("file uploaded sucessfully")
    }
    catch(err){
    console.log(err)
    }
})
router.post("/check",Auth,(req,res)=>{
    // console.log(req.user)
    var userdata= req.user
    res.status(201).json(userdata)
})

module.exports = router;