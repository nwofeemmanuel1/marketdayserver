const express=require('express')
const router=express.Router()
const User=require('../model/user')
const validateregistration=require('../validations/validateregister')
const hashpasword=require('../hash/hash')

const jwt=require('jsonwebtoken')
const generateToken=(id)=>{
const token=jwt.sign({id:id},'jwtprivatekey')
return token
}


const registerUser=async(username,email,pasword)=>{
   const userexist= await User.findOne({email})

   if(userexist ) return {errMessage:"user already exist please login",error:true}
   try{
 const hashed= await hashpasword(pasword)
const newuser=await new User({
    username:username,
    email:email,
    pasword:hashed,
    userIcon:"https://picsum.photos/200/300?grayscale",
     balance:0,
    sales:[ ],
    purchase:[]
})
const user=await newuser.save()
const token=generateToken( user._id)
return {registerd:true,token:token, message:`created a user account for ${username}` , error:false, user:{
      id:user._id,
    date: user.date,
    username:user.username,
    email:user.email,
    userIcon:user.userIcon,
     balance:user.balance,
    sales:user.sales,
    purchase:user.purchase,

}}
   }catch(error){
       return{errMessage:error.message, error:true}
   }
 
}


router.post('/',  async(req,res)=>{
    const isvalid=validateregistration(req)
if(isvalid ===true){
const registerduser=await registerUser(req.body.username,req.body.email,req.body.pasword)
if(registerduser.error) return res.status(400).send(registerduser)
res.status(200).send(registerduser)
// res.json({message:'validated already', error:false})
}else{
    res.json({errMessage:isvalid, error:true, registerd:false})
}
})


module.exports=router


            // console.log(  event.target.files[0], formData.append("photo",new Blob([files= event.target.files[0],name= event.target.files[0].name, size= event.target.files[0].size, type=event.target.files[0].type ], {name: event.target.files[0].name, size: event.target.files[0].size, type: event.target.files[0].type}, )))