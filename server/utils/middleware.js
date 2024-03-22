const express = require("express");
const jwt=require('jsonwebtoken')
const Auth=(req,res,next)=>{
// console.log("middleware")
 const token=req.header('Authorization')
req.token=token
jwt.verify(req.token,'private-key',async(err,data)=>{
if(err){
return res.send("invalid")
}
else{
    return res.status(200).send(data)
}
})
next();
}



module.exports = {Auth}