const router=require('express').Router()
const bodyparser=require('body-parser')
const multer = require('multer');
const upload = multer();
const Post=require("../models/postschema")
router.use(bodyparser.json());

router.get("/allpost",async(req,res)=>{
    try{
        const data=await Post.find({})
        // console.log(data)
        res.json(data)
    }
    catch(err){
        console.log(err)
    }
})
router.get("/userpost",async(req,res)=>{
    try{
        console.log(req.body)
        // const data=await Post.find({owner:req.body})
        // // console.log(data)
        // res.json(data)
    }
    catch(err){
        console.log(err)
    }
})
router.post("/add",upload.single("image"),async(req,res)=>{
    try{
        const ImageData = {
            file_name: req.file.originalname,
            file_type: req.file.mimetype,
            file_data: `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`,
            file_size: req.file.size,
        }
        const Caption=req.body.caption
        const Owner=req.body.owner
        const post=new Post({
            image:ImageData,
            caption:Caption,
            owner:Owner
        })
        const result=await post.save();
        return res.status(201).send("file uploaded sucessfully")
    }
    catch(err){
    console.log(err)
    }
})
module.exports=router;