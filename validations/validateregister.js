const Joi=require("joi")

function validateregistration(req){


const schema={
    username:Joi.string().min(6).required(),
    email:Joi.string().email().required(),
    pasword:Joi.string().min(8).required(),
    userIcon:Joi.string()
}
const result=Joi.validate({username:req.body.username,email:req.body.email, pasword:req.body.pasword},schema)

if(result.error) return  result.error.details[0].message
return true
}

// const error =validateregister()
// if(error)console.log(error)



module.exports=validateregistration