const Joi=require("joi")

const validateDebit=(email,amount)=>{

const schema={
    email:Joi.string().email().required(),
    amount:Joi.number().required()

}

const result=Joi.validate({email,amount},schema)

if(result.error) return  result.error.details[0].message
return true

}

module.exports=validateDebit
