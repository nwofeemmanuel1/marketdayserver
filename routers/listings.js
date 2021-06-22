const router = require('express').Router()
const Listings = require('../model/listing')
const User = require('../model/user')
const validatelisting = require('../validations/validatelisting')
const fetch=require("isomorphic-fetch")
// const multipart=require('multipart-formdata')
const protect = require('../hash/protection')
const Joi=require("joi")

let uploadedimage=[]





const validateImage=(image)=>{
const schema={
    image:Joi.string().required()
}
const result=Joi.validate({image},schema)
if(result.error) return  result.error.details[0].message
return true


}


router.post('/',protect, async (req, res) => {
    if(req.body.uploadImage){

 try{
 for (let image of req.body.uploadImage) {
            isvalid = validateImage(image)
            if (isvalid !== true) return res.status(400).json({ error: true, errMessage: isvalid })
     }

  const bodyisvalid=validatelisting(req.body)
if(bodyisvalid ===true){
try{

    for(let image of req.body.uploadImage ){

       console.log( req.body.uploadImage.length)
           let base64Img = `data:image/jpg;base64,${image}`;
         
      let data = {
        "file": base64Img,
        "upload_preset": "zs8lu2hy",
      }
try{
  let response=await fetch("https://api.cloudinary.com/v1_1/marketday/upload",{
  method:"POST",
  headers:{"content-type":"application/json"},
  body:JSON.stringify(data)
})
 const result=await response.json()
 if(uploadedimage.length < 1){ uploadedimage=[result.secure_url] }else{ uploadedimage=[...uploadedimage,result.secure_url]}
// if(uploadedimage.length == req.body.uploadImage.length)
// return res.status(200).json({error:false,message:uploadedimage})
console.log(uploadedimage)
console.log(uploadedimage[0])
}catch(err){
 return res.json({error :true,errMessage:err.message})

}  }

  try{

        const itemNumber=await Listings.find()
        .countDocuments()
   const listing= await new Listings({
        source:uploadedimage[0],
        secondsource:uploadedimage[1] || "",
        thirdsource:uploadedimage[2] || "",
        fourthsource:uploadedimage[3] || "",
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
            res.json({errMessage:err.message,  error:true})

        }





}catch(err){
    res.json({error:true,errMessage:err.message})
 
}
}else{
  return  res.json({error:true,errMessage:bodyisvalid})
}





        }catch(err){
            res.status(400).json({error:true,errMessage:err.message})
        }

    }else{
        res.json({error:true,errMessage:"Please The image to be uploaded was no specified"})
    }



// req.body.uploadImage.array.forEach()

//  for (let image of req.body.uploadImage) {
//             // console.log(product)
//             // isvalid = validatesales(product.seller, req.body.buyer, req.body.totalPrice, product.Listing)
//             // if (isvalid !== true) return res.status(400).json({ error: true, errMessage: isvalid })
//             console.log(image)
//      }




//    console.log(totalfetchitem)
//            let base64Img = `data:image/jpg;base64,${image}`;
         
//       let data = {
//         "file": base64Img,
//         "upload_preset": "zs8lu2hy",
//       }

// try{
// const response=await fetch("https://api.cloudinary.com/v1_1/marketday/upload",{
//    method:"POST",
//   headers:{"content-type":"application/json"},
//    body:JSON.stringify(data)
//  })

//  const result=await response.json()


// }catch(err){
//     res.json({error:true,errMessage:err.message})
// }





//     const isvalid=validatelisting(req.body)
   
//     if(isvalid===true) {
//         try{

//         const itemNumber=await Listings.find()
//         .countDocuments()
//    const listing= await new Listings({
//         source:req.body.source,
//         secondsource:req.body.secondsource,
//         thirdsource:req.body.thirdsource,
//         fourthsource:req.body.fourthsource,
//         name:req.body.name,
//         price:req.body.price,
//          prevprice:req.body.price,
//      description:req.body.description,
//      category:req.body.category,
//      itemNumber:itemNumber + 1,
//      seller:req.body.seller,
//      user:req.body.user
//    })
//   const result= await listing.save()
// res.json({message:"success",error:false})

//         }catch(err){
//             res.json({errMessage:err.message,  error:true})

//         }


//     }else{
//         res.json({errMessage:isvalid,error:true})
//     }


})

module.exports = router