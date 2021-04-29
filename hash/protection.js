const jwt=require('jsonwebtoken')

const protectRoute=(req,res,next)=>{
if(req.body.token){
    const token =req.body.token
    try{
const verifiedtoken=jwt.verify(token,'jwtprivatekey')

next()
    }catch(err){

     res.status(404).send(`${err.message} please login to access this api`)
    }

}else{
    // res.status(400).
   res.status(400).send(" no token found you need to login to access this route")
}

}


module.exports=protectRoute





