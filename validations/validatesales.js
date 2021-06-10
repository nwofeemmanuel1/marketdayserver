const Joi=require("joi")

const validatesales=(seller,buyer,totalPrice,Listing)=>{
const schema={
    seller:Joi.string().email().required(),
    buyer:Joi.string().email().required(),
    totalPrice:Joi.number().min(0).required(),
    Listing:Joi.string().required(),
}
const result=Joi.validate({seller,buyer,totalPrice,Listing},schema)


if(result.error){return (result.error.details[0].message)
}else{
return true
}
}

module.exports=validatesales