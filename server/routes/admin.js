const router=require('express').Router()
router.get("/mypost",(req,res)=>{
    res.send("admin node")
})
module.exports=router;