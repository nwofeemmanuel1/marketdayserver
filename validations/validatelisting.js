
const Joi=require("joi")

const validatelisting=(req)=>{

const schema={
source:Joi.string().max(1024).required(),
secondsource:Joi.string().max(1024),
thirdsource:Joi.string().max(1024),
fourthsource:Joi.string().max(1024),
name:Joi.string().min(3).max(1000).required(),
price:Joi.number().min(0).required(),

description:Joi.string().min(8).max(700).required(),
category:Joi.string().max(11).required(),
seller:Joi.string().email().required(),
user:Joi.string().required()
}

const result=Joi.validate({
    source:req.source,secondsource:req.secondsource, thirdsource:req.thirdsource,
    fourthsource:req.fourthsource,name:req.name,price:req.price,  description:req.description,category:req.category,
    seller:req.seller,user:req.user

},schema)

if(result.error){ return result.error.details[0].message
}
return true 

}

// const answer=validatelisting({
//     source:"https://localls",
//     secondsource:"https://secondsource",
//     thirdsource:"https://thirdsource",
//     fourthsource:"https://fourthsurce",
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


















// function validatelisting(req){
// const schema={
 
//     seller:Joi.string().email().required(),
//     itemName:Joi.string().required(),
//     description:Joi.string().required(),
//     price:Joi.number().required().min(0),
//     category:Joi.string().required(),
 
// }
// const result=Joi.validate({seller,itemName,description,price,category},schema)

// if(result.error){ return result.error.details[0].message
// }
// return true 
// }

// // const error =validateregister()
// // if(error)console.log(error)

// // validatelisting(1,1,'hed','ds',"source",1)

// module.exports=validatelisting

            // console.log(  event.target.files[0], formData.append("photo",new Blob([files= event.target.files[0],name= event.target.files[0].name, size= event.target.files[0].size, type=event.target.files[0].type ], {name: event.target.files[0].name, size: event.target.files[0].size, type: event.target.files[0].type}, )))