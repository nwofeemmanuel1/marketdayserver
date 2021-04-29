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







// uploads.any('uploads')

router.post('/', async(req,res)=>{
    // console.log(req.files)
    // res.send(req.files)
    res.send(req.body)
    
//   const listingisvalid=  validatelisting(req.body.url,req.body.secondurl,req.body.price,req.body.category,req.body.user)
//  if(listingisvalid){
// try{
// const listing=  await new Listings({
//       url:`http://localhost:3000/${req.files[0].path}`,
//         secondurl:req.body.secondurl,
//        price: req.body.price,
//       category:  req.body.category,
//        user: req.body.user
//   })
// const result=await listing.save()
// res.json({message:result,error:false})
// }catch(err){
//     res.status(400).json({errMessage:err.message ,error:true})
// }



//  }else{
//      res.json({errMessage:listingisvalid,error:true})
//  }

})

module.exports=router