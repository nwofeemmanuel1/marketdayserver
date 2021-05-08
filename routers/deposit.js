const express= require('express')
const protectroute=require('../hash/protection')
const router=express.Router()
const validatedeposit=require('../validations/validatedposit')
const User=require('../model/user')
router.put('/',protectroute,async(req,res)=>{
const isvalid=validatedeposit(req.body.email,req.body.cardnumber,req.body.expirydate,req.body.csv,req.body.amount)

if(isvalid===true){

    try{

             const user = await User.findOne({ email: req.body.email })
            if (user) {
                // res.json({message:user, error:false})

  user.set({
                    balance: user.balance += parseInt( req.body.amount)
          })
                const result = await user.save()
                // `success balance updated to $${result.balance}`
                res.json({ message:`success your balance is now $${result.balance}` , error: false })


        } else{
            res.status(403).json({
                errMessage:"invalid user please try with another account",
                error:true
            })
        }          
        


    }catch(err){
        res.json({errMessage:err,error:true})
    }

}else{
    res.json({
        errMessage:isvalid,
        error:true
      })

}

})
module.exports=router


