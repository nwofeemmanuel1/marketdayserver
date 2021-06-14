const express=require("express")
const router=express.Router()
const Listing=require("../model/listing")
const User=require("../model/user")
const Sales=require("../model/sales")
const Joi=require("joi")
const protect=require("../hash/protection")
const validateId=(id,salesId)=>{
    const schema={
        id:Joi.string().required(),
        salesId:Joi.string().required()
    }
    const result=Joi.validate({id,salesId},schema)
    if(result.error){ return result.error.details[0].message
}else{
return true 
}

}

router.delete("/",protect,async(req,res)=>{

 const isvalid=validateId(req.body.id,req.body.salesId)
if(isvalid ===true){
    try{

const listing=await Listing.findById(req.body.id) 
// .select("user -_id")
if(listing){
    
const sale=await Sales.findByIdAndDelete(req.body.salesId)
if(!sale)return res.json({error:true,errMessage:" The Product You Bought No Longer Exist Please take your money Back"})
const user=await User.findById(listing.user)
if(user){
user.set({
balance:user.balance + listing.price
})

await Listing.findByIdAndDelete(req.body.id)
await user.save()
return res.json({error:false,message:"Product Verified successfully"})
}else{
    return res.status(404).json({error:true,errMessage:"The seller has Deleted an Account associated with this product Please take your money back "})
}
}
else{
return res.status(404).json({error:true,errMessage:"The Product You are trying to Verify has been Verified And  no longer Exist",listing})
} 
 }catch(err){
        res.json({error:true,errMessage:err.message})
    }
}
else{
    return res.status(400).json({error:true,errMessage:isvalid})
}

})

module.exports=router