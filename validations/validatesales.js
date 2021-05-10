const Joi=require("joi")

const validatesales=(seller,buyer,Listing)=>{
const schema={
    seller:Joi.string().email().required(),
    buyer:Joi.string().email().required(),
    Listing:Joi.string().required(),

}
const result=Joi.validate({seller,buyer,Listing},schema)


if(result.error){return (result.error.details[0].message)
}else{
return true
}
}

module.exports=validatesales