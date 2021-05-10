const Joi=require("joi")

const validatupdate=(email,username,country,phone)=>{

      const schema={
          
            email:Joi.string().email().required(),
            username:Joi.string(),
            country:Joi.string(),
            phone:Joi.number().min(0)

        }
        const result=Joi.validate({email,username,country,phone},schema)
        
if(result.error) {
    return result.error.details[0].message 
} else{
return true
}
}
module.exports=validatupdate