



const Joi=require("joi")

function validatelisting(seller,itemName,description,price,category){
const schema={
 
    seller:Joi.string().email().required(),
    itemName:Joi.string().required(),
    description:Joi.string().required(),
    price:Joi.number().required().min(0),
    category:Joi.string().required(),
 
}
const result=Joi.validate({seller,itemName,description,price,category},schema)

if(result.error){ return result.error.details[0].message
}
return true 
}

// const error =validateregister()
// if(error)console.log(error)

// validatelisting(1,1,'hed','ds',"source",1)

module.exports=validatelisting