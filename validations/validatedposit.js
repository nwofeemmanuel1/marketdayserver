const Joi = require("joi")

const validatedeposit=(email,cardnumber,expirydate,csv,amount)=>{
const schema={
    email:Joi.string().email().required(),
    cardnumber:Joi.number().min(0).required(),
    expirydate:Joi.number().required(),
    csv:Joi.number().min(0).required(),
    amount:Joi.number().min(0).max(10000).required()
}
const result=Joi.validate({email,cardnumber,expirydate,csv,amount},schema)

if(result.error){ return result.error.details[0].message
}
return true 

}

module.exports=validatedeposit
