const express=require('express')
const router=express.Router()
const User=require('../model/user')
const validateregistration=require('../validations/validateregister')
const hashpasword=require('../hash/hash')

const registerUser=async(username,email,pasword)=>{
   const userexist= await User.findOne({email})

   if(userexist ) return {errMessage:"user already exist please login",error:true}
   try{
 const hashed= await hashpasword(pasword)
const newuser=await new User({
    username:username,
    email:email,
    pasword:hashed
})
const user=await newuser.save()
return user
   }catch(error){
       return{errMessage:error.message, error:true}
   }
 
}


router.post('/',  async(req,res)=>{
    const isvalid=validateregistration(req)
if(isvalid ===true){
const registerduser=await registerUser(req.body.username,req.body.email,req.body.pasword)
if(registerduser.error) return res.status(400).send(registerduser)
res.status(200).send({message:`created a user account for ${registerduser.username}`, error :false})
// res.json({message:'validated already', error:false})
}else{
    res.json({errMessage:isvalid, error:true})
}
})


module.exports=router