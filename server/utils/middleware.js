const Auth=(req,res,next)=>{
console.log("middleware")
return res.send("hello")
next();
}



module.exports = {Auth}