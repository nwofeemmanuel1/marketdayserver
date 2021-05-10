const express=require("express")
const Router=express.Router()
const Sales=require('../model/sales')
const validatesales = require("../validations/validatesales")
const validateSales=require('../validations/validatesales')
const protectRoute=require('../hash/protection')

const Listing =require('../model/listing')
const Joi=require('joi')

const validateviewsales=(seller)=>{
const schema={
    seller:Joi.string().email().required()
}
const result=Joi.validate({seller},schema)

if(result.error) return  result.error.details[0].message
return true
}

Router.post("/viewsales", protectRoute,async(req,res)=>{
const isvalid=validateviewsales(req.body.seller,)
if(isvalid == true){
try{
const sales=await Sales.find({seller:req.body.seller})
.select('seller')
.populate("Listing",)
if(sales.length >0){res.json({message:sales, error:false})
}else{res.status(404).json({errMessage:"please the user has not made any sale",error:true})}

}catch (err){
    res.status(400).json({errMessage:err.message,error:true})
}



}else{
    res.json({errMessage:isvalid, error:true})
}

})



const validateviewpurchase=(buyer)=>{
const schema={
    buyer:Joi.string().email().required()
}
const result=Joi.validate({buyer},schema)

if(result.error) return  result.error.details[0].message
return true
}

Router.post("/viewpurchase", protectRoute,async(req,res)=>{
const isvalid=validateviewpurchase(req.body.buyer,)
if(isvalid == true){
try{
const sales=await Sales.find({buyer:req.body.buyer})
.select('buyer')
.populate("Listing",)
if(sales.length >0){res.json({message:sales, error:false})
 }else{ res.status(404).json({errMessage:" the user has not made any purchase",error:true})}
}catch (err){
    res.status(400).json({errMessage:err.message,error:true})
}



}else{
    res.json({errMessage:isvalid, error:true})
}

})




Router.post("/", protectRoute,async(req,res)=>{
const isvalid=validatesales(req.body.seller,req.body.buyer,req.body.Listing)
if(isvalid == true){
try{
const sold=await new Sales({
seller:req.body.seller,
buyer:req.body.buyer,
Listing:req.body.Listing
})
const soldproduct=await sold.save()
res.status(200).send({ message:"you already bought a new product and will be shipped to you within the time specified by the seller",product:sold, error:false })
}catch (err){
    res.status(400).json({errMessage:err.message,error:true})
}



}else{
    res.json({errMessage:isvalid, error:true})
}

})
module.exports=Router