const bcrypt=require("bcrypt")

async function hashpasword(pasword){
    const salt = await bcrypt.genSalt(10)
    const hashed=await bcrypt.hash(pasword,salt)
    return hashed
}
module.exports=hashpasword

// hashpasword('degshghs')

































// const express=require("express")
// const router=express.Router()
// const loginvalidator = require("../validations/validatelogin")
// const User=require ("../model/user")
// let bcrypt=require("bcrypt")
// // const jwt=require("jsonwebtoken")
// const gentoken=require("../hash/token")

// const login=async(email, pasword)=>{
// const user=await User.findOne({email})
// if(!user) return "invalid Email or pasword"  
// const isverfiedpasword= await bcrypt.compare(pasword,user.pasword)
// if(isverfiedpasword) {
// const token=gentoken()
// return token
// } else{
//     return false
// }
// }

// router.post("/", async(req,res)=>{
//     const validated=  loginvalidator(req.body.email,req.body.pasword)
   
// if(validated ){
//      try{
//     // res.send("validated")
//     const islogedin= await login(req.body.email, req.body.pasword)
//     if (islogedin) return  res.json({
//       loggedin:true,
//       authtoken:islogedin
//   })
 
// res.json({
//       loggedin:false,
//       authtoken:islogedin
//   })

// } catch(error){
// res.send(error.message)
//     }

// } else{
//     res.send(validated)
// } 
// })


// module.exports=router