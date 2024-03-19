const express = require("express");
const jwt=require('jsonwebtoken')
const Auth=(req,res,next)=>{
console.log("middleware")
const token =req.header('Authorization')
console.log(token)
next();
}



module.exports = {Auth}