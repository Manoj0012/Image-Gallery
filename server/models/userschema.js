const mongodb=require("mongoose")
const userpostschema=new mongodb.Schema({
    username:{type:String,required:true},
    password:{type:String,required:true},
    role:{type:String,required:true}
})
const userpostmodel=mongodb.model('User',userpostschema)
module.exports=userpostmodel