const router=require('express').Router()
const Listings = require('../model/listing')
const Listing=require('../model/listing')
const validatelisting=require('../validations/validatelisting')
// const multipart=require('multipart-formdata')



const multer=require('multer')

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'uploads/')
    },
    filename:function(req,file,cb){
cb(null,`${Math.random(45000*6515*23+1)}${file.originalname}`)
    }
})
const filefilter=(req,file,cb)=>{
    
if(file.mimetype === "image/jpeg" || file.mimetype ==="image/png") return cb(null,true)
cb(null,false) 
}

const uploads=multer({storage:storage,fileFilter:filefilter})




router.post('/post',uploads.any("myFile"),(req,res)=>{
console.log(req.files)
})


// uploads.any('uploads')

router.post('/' ,async(req,res)=>{

  const listingisvalid=  validatelisting(req.body.itemNumber,req.body.price,req.body.name,req.body.seller,req.body.source,req.body.prevprice,req.body.category, req.body.user,)
 if(listingisvalid === true ){
    //  res.send("validated")

try{
const listing=  await new Listings({
     
   itemNumber:req.body.itemNumber,
        price:req.body.price,
        name:req.body.name,
         seller: req.body.seller,
          source: req.body.source,
        prevprice:req.body.prevprice,
         category:req.body.category,
        user:req.body.user,
       
        // sellerid: 1 
  })
const result=await listing.save()
res.json({message:result,error:false})
}catch(err){
    res.status(400).json({errMessage:err.message ,error:true})
}



 }else{
     res.json({errMessage:listingisvalid,error:true})
 }

})

module.exports=router