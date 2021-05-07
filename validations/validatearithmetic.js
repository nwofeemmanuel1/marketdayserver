const Joi=require("joi")

const validatebalance=(email,balance)=>{
const schema={
    email:Joi.string().email().required(),
    balance:Joi.number().min(0).required()
}

const result=Joi.validate({email,balance},schema)

if(result.error)return result.error.details[0].message

return true


}

module.exports=validatebalance