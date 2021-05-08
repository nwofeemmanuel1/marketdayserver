const Joi=require('joi')
validateviewbalance=(email)=>{
const schema={
    email:Joi.string().email().required()
}
const result=Joi.validate({email},schema)

if(result.error) return  result.error.details[0].message
return true
}

module.exports=validateviewbalance