const mongodb=require("mongoose")
const postschema=new mongodb.Schema({
    owner_id:{type:String,require:true},
    name:{type:String,require:true},
    name:{type:String,require:true},
    caption:{type:String,require:true},
    date:{type:String,require:true}

})
const postschemamodel=mongodb.model("Posts",postschema)
module.export=postschemamodel;