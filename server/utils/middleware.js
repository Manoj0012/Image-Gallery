const express = require("express");
const jwt=require('jsonwebtoken');
const User=require('../models/userschema')
const Auth=(req,res,next)=>{

 const token=req.header('Authorization')
req.token=token
jwt.verify(req.token,'private-key',async(err,data)=>{
if(err){
return res.send("invalid")
}
    const userdata=await User.findOne({username:data.User})
    req.user=userdata
    next();
})

}

module.exports = {Auth}