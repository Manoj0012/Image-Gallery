const router=require('express').Router()
router.get("/allpost",(req,res)=>{
    res.send("post node")
})
module.exports=router;