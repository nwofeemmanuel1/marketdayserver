
// const Joi=require("joi")

// const validatelisting=(req)=>{

// const schema={
// source:Joi.string().max(1024).required(),
// secondsource:Joi.string(),
// thirdsource:Joi.string(),
// fourthsource:Joi.string(),
// name:Joi.string().min(3).max(1000).required(),
// price:Joi.number().min(0).required(),

// description:Joi.string().min(8).max(700).required(),
// category:Joi.string().max(11).required(),
// seller:Joi.string().email().required(),
// user:Joi.string().required()
// }

// const result=Joi.validate({
//     source:req.source,secondsource:req.secondsource, thirdsource:req.thirdsource,
//     fourthsource:req.fourthsource,name:req.name,price:req.price,  description:req.description,category:req.category,
//     seller:req.seller,user:req.user

// },schema)

// if(result.error){ return result.error.details[0].message
// }
// return true 

// }

// const answer=validatelisting({
//     source:"https://localls",
//     secondsource:"",
//     thirdsource:"",
//     fourthsource:"",
//     name:"chider",
//     price:2,
//     prevprice:2,
//    description:"required ds",
//     category:"categ",
//     seller:"sller@gmail.net",
//     user:"user"
// })
// console.log(answer)

// module.exports=validatelisting









const Joi=require("joi")

const validatelisting=(req)=>{

const schema={

name:Joi.string().min(3).max(1000).required(),
price:Joi.number().min(0).required(),

description:Joi.string().min(8).max(700).required(),
category:Joi.string().max(11).required(),
seller:Joi.string().email().required(),
user:Joi.string().required()
}

const result=Joi.validate({
   name:req.name,price:req.price,  description:req.description,category:req.category,
    seller:req.seller,user:req.user

},schema)

if(result.error){ return result.error.details[0].message
}
return true 

}

// const answer=validatelisting({
//     source:"https://localls",
//     secondsource:"",
//     thirdsource:"",
//     fourthsource:"",
//     name:"chider",
//     price:2,
//     prevprice:2,
//    description:"required ds",
//     category:"categ",
//     seller:"sller@gmail.net",
//     user:"user"
// })
// console.log(answer)

module.exports=validatelisting





























