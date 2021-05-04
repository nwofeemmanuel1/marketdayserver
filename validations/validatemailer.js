const Joi=require("joi")
const validateEmail=(subject,text,reciever)=>{
const emailschema={
    subject:Joi.string().required(),
    text:Joi.string().required(),
    reciever:Joi.string().required()
}
const result=Joi.validate({subject,text,reciever},emailschema)

if(result.error) return  result.error.details[0].message
return true


}

module.exports=validateEmail