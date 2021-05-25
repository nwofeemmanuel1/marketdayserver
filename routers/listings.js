const router = require('express').Router()
const Listings = require('../model/listing')
const User = require('../model/user')
const validatelisting = require('../validations/validatelisting')
// const multipart=require('multipart-formdata')
const protect = require('../hash/protection')







router.post('/',protect, async (req, res) => {
    const isvalid=validatelisting(req.body)
   
    if(isvalid===true) {
        try{

        const itemNumber=await Listings.find()
        .countDocuments()
   const listing= await new Listings({
        source:req.body.source,
        secondsource:req.body.secondsource,
        thirdsource:req.body.thirdsource,
        fourthsource:req.body.fourthsource,
        name:req.body.name,
        price:req.body.price,
         prevprice:req.body.price,
     description:req.body.description,
     category:req.body.category,
     itemNumber:itemNumber + 1,
     seller:req.body.seller,
     user:req.body.user
   })
  const result= await listing.save()
res.json({message:"success",error:false})

        }catch(err){
            res.json({errMessage:err.message,error:true})

        }


    }else{
        res.json({errMessage:isvalid,error:true})
    }


})

module.exports = router