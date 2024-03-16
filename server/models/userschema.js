const mongodb=require("mongoose")
const userpostschema=new mongodb.Schema({
    username:String,
    password:String
})
const userpostmodel=mongodb.model('User',userpostschema)
module.exports=userpostmodel