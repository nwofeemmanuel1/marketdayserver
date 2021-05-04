const Joi=require("joi")

const validatesales=(seller,buyer,product)=>{
const schema={
    seller:Joi.string().email().required(),
    buyer:Joi.string().email().required(),
    product:Joi.array().required(),

}
const result=Joi.validate({seller,buyer,product},schema)


if(result.error){return (result.error.details[0].message)
}else{
return true
}
}

module.exports=validatesales