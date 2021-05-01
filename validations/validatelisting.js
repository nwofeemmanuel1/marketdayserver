



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