const mongodb=require("mongoose")
const adminschema=new mongodb.Schema({
    username:{type:String,required:true},
    password:{type:String,required:true}
})
const adminmodel=mongodb.model('Admin',adminschema)
module.exports=userpostmodel