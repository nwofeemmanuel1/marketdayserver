const express=require('express')
const router=express.Router()
const protectroute=require('../hash/protection')
validateviewbalance=require('../validations/validateviewbalance')
const User=require('../model/user')

router.post('/',protectroute,async(req,res)=>{
const isvalid=validateviewbalance(req.body.email)

if(isvalid ===true ){
//     res.json({
//     message:isvalid,
//     error:false
// })
try{
const user=await User.findOne({email:req.body.email})
 
 if(user){
    //  user.select('balance')
res.status(200).json({
balance:user.balance,
error:false
})

 }else{
     res.status(403).json({errMessage:'forbidden request',error:true})
 }

}catch(err) {
    res.status(400).json({errMessage:err.mesage,error:true})
}  

}else{
     res.json({
   errMessage:isvalid,
    error:true
})
}

})
module.exports=router