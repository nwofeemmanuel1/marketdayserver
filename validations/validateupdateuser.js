const Joi=require("joi")

const validatupdate=(email)=>{

      const schema={
            email:Joi.string().email().required(),
        }
        const result=Joi.validate({email},schema)
        
if(result.error) {
    return result.error.details[0].message 
} else{
return true
}
}
module.exports=validatupdate