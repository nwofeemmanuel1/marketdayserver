const express=require("express")
const Router=express.Router()
const Sales=require('../model/sales')
const validatesales = require("../validations/validatesales")
const validateSales=require('../validations/validatesales')
const protectRoute=require('../hash/protection')

Router.post("/", protectRoute,async(req,res)=>{
const isvalid=validatesales(req.body.seller,req.body.buyer,req.body.product)
if(isvalid == true){
try{
const sold=await new Sales({
seller:req.body.seller,
buyer:req.body.buyer,
product:req.body.product
})
const soldproduct=await sold.save()
res.status(200).send({ message:"you already bought a new product and will be shipped to you within the time specified by the seller",product:sold, error:false })
}catch (err){
    res.status(400).json({errMessage:err.errMessage,error:true})
}



}else{
    res.json({errMessage:isvalid, error:true})
}

})
module.exports=Router