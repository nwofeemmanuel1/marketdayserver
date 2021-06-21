const jwt=require("jsonwebtoken")

function generatetoken(userid){
   const token= jwt.sign({id:userid},"privatekeyhardcoded")
   return token
}
module.exports=generatetoken
