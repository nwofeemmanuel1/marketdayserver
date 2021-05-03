const express=require("express")
const router=express.Router()
const Joi=require('joi')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const User=require('../model/user')

// const paswordisvalid=async(pasword)=>{
// await bcrypt.compare(pasword, )
// }

const tokengenerator=(id)=>{
const generatedtoken= jwt.sign({id:id},'jwtprivatekey')
return generatedtoken
}

const loginUser=async(email,pasword)=>{
const user=await User.findOne({email})
if(user){
  
  const paswordisvalid= await bcrypt.compare(pasword,user.pasword) 
  if(paswordisvalid) {
     const token =  tokengenerator(user._id)
return {loged_in:true,token:token,error:false, 
  user:{
       date: user.date,
    username:user.username,
    email:user.email,
    userIcon:user.userIcon,
     balance:user.balance,
    sales:user.sales,
    purchase:user.purchase,
  }
}
  }else{
return {loged_in:false, errorMessage:"invalid Email or pasword", error:true}
  }

}else{
     return {errorMessage:'invalid Email or pasword', error:true}
}

}

function validatelogin(email,pasword){

const schema={
    email:Joi.string().email().required(),
    pasword:Joi.string().min(6).required()
}
 const result=Joi.validate({email,pasword},schema)
if(result.error) return  result.error.details[0].message
return true  
}



router.post('/',async(req,res)=>{
  const isvalidated=validatelogin(req.body.email,req.body.pasword)
  if(isvalidated === true){

    // try{
const response = await loginUser(req.body.email,req.body.pasword)

if(response.error)return res.status(400).send({message:response.errorMessage, error:response.error})
 res.status(200).send(response)
   // }catch(err){
    //     res.send(err)
    // }
    
  }else{
  res.status(400).send({message:isvalidated,error:true})
  }

})

module.exports = router


