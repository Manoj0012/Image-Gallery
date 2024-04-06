const mongodb=require("mongoose")
const postschema=new mongodb.Schema({ 
    image: { 
        file_name: String,
        file_type: String,
        file_data: String,
        file_size: String,
    },
    caption:{type:String,require:true},
    owner:{type:String,require:true}
})
const postmodel=mongodb.model("Posts",postschema)
module.exports=postmodel;