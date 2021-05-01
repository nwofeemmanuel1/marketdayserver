// const Joi=require('joi')

// const validatelisting=(itemNumber,price,name,seller,source,prevprice,user,category)=>{
    

//     const schema={
//         ItemNumber: Joi.number().min(0).required(),
//         price:Joi.number().min(0).required(),
//         name:Joi.string().min(3).required(),
//          seller: Joi.string().required(),
//           source: Joi.string().required(),
//         prevprice: Joi.number().required(),
//         user:Joi.string().required(),
//         category:Joi.string().max(9).required(),
//         // sellerid: 1 */
//         }
// const result=Joi.validate({itemNumber,price,name,seller,source,prevprice,user,category},schema)

// if(result.error){
//   console.log(result.error.details[0].message)
// }else{
// console.log('no error ')
// }
// }

//   {/* ItemNumber: 1,
//         id: 1,
//         price: 100,
//         name: "red jacket",
//         seller: "john",
//         source: "https://picsum.photos/id/237/200/300",
//         prevprice: 100,
//         sellerid: 1 */}
// validatelisting(10)
// module.exports=validatelisting
// // secondurl:not result price:require, user:req











// ,name,seller,source,prevprice,user

// const Joi=require("joi")

// const validatelisting=(itemnumber,price)=>{
//   const schema={
//     itemnumber:Joi.number().min(0).required(),
//     price:Joi.number().min(0).required
//   }

//  const result= Joi.validate({itemnumber,price},schema)

//  if(result.error){
//   console.log(result.error.details[0].message)
// }else{
// console.log('no error ')
// }
// }

// validatelisting(10)






























const Joi=require("joi")

function validatelisting(itemNumber,price,name,  seller,source,prevprice,category,user){


const schema={
    itemNumber:Joi.number().min(0).required(),
    price:Joi.number().min(0).required(),
    name:Joi.string().min(3).required(),
    seller:Joi.string().required(),
    source:Joi.string().max(1024).required(),
    prevprice:Joi.number().min(0).required(),
    category:Joi.string().min(3).required(),
    user:Joi.string().required(),
    // userIcon:Joi.string()
}
const result=Joi.validate({itemNumber:itemNumber,price:price, name:name,seller:seller,source:source,prevprice:prevprice,category:category,user:user},schema)

if(result.error){ return result.error.details[0].message
}
return true 
}

// const error =validateregister()
// if(error)console.log(error)

// validatelisting(1,1,'hed','ds',"source",1)

module.exports=validatelisting