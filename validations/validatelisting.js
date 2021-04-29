const Joi=require('joi')

const validatelisting=(url,secondurl,price,category,user)=>{
    

    const schema={
        url:Joi.string().max(1024).required(),
    
    secondurl:Joi.string().max(1024),

price:Joi.number().min(0).required(),
category:Joi.string().max(9).required(),
user:Joi.string().required()

    }
const result=Joi.validate({url,secondurl,price,category,user},schema)

if(result.error){ return (result.error.details[0].message)
}else{
return true
}
}

module.exports=validatelisting
// secondurl:not result price:require, user:req