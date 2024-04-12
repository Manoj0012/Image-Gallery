const mongodb=require("mongoose")
const userpostschema=new mongodb.Schema({
    username:{type:String,required:true},
    password:{type:String,required:true},
    role:{type:String,required:true},
    image: { 
        file_name: String,
        file_type: String,
        file_data: String,
        file_size: String,
    }
})
const userpostmodel=mongodb.model('User',userpostschema)
module.exports=userpostmodel