const User=require('../model/user')
const validate=require('../validations/validateupdateuser')
const express=require('express')
const protect=require('../hash/protection')
const router=express.Router()
router.put('/', protect,async(req,res)=>{
    if(req.body.country ||req.body.phone){

try{

   
 const isvalid = validate(req.body.email)  
if(isvalid===true){
// res.json({message:"you have passed " ,error:false})
const user=await User.findOne({email:req.body.email})
// console.log(user)
if(user){
 user.set({
  country:req.body.country,
    phone: req.body.phone
  })
    const result=await user.save()  
  res.json({result})
}else{
    res.json({errMessage:"the user with the given email does not exist", error:true})
}
    // response.status(400).json({ errMessage:"no user with the given email", error:true})

}
// res.send(user)

else{ 
    res.json({errMessage:isvalid,error:true})
}

}catch(err){
    res.json({errMessage:err, error :true})
}

  
 }
 else{
        res.json({errMessage:"you need to update either country or phone number",error:true})
    }
})
module.exports=router