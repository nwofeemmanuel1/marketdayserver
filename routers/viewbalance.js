const express=require('express')
const router=express.Router()
const protectroute=require('../hash/protection')
validateviewbalance=require('../validations/validateviewbalance')
const validateDebit=require("../validations/validateDebit")
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







router.put("/debit",protectroute,async(req,res)=>{
const isvalid=validateDebit(req.body.email,req.body.amount)
  if(isvalid ===true){
const user=await User.findOne({email:req.body.email})
// .select("balance")
if(!user) return res.status(404).json({ error:true,errMessage:"Access Denied because User was not found please  "})

if(user.balance >= parseInt(req.body.amount)){
const result=await user.set({ 
    balance:user.balance - parseInt(req.body.amount)
})
const finalresult=await result.save()
return res.json({error:false,message:"Congratulations your fund has been withdrawn successfully"})

}else{
  return  res.status(400).json({error:true,errMessage:"Insufficient balance please check balance and try again"})  
}

  }else{
    return   res.status(400).json({error:true,errMessage:isvalid})
  }
})





module.exports=router