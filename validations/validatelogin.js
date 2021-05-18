const Joi=require("joi")

function validatelogin(email,pasword){


const schema={
  
    email:Joi.string().required().email(),
    pasword:Joi.string().min(8).required(),
    
}
const result=Joi.validate({email:email, pasword:pasword},schema)

if(result.error){return (result.error.details[0].message)
}else{
return true
}
}

// const error =validateregister()
// if(error)console.log(error)

module.exports=validatelogin




//  console.log(  event.target.files[0], formData.append("photo",new Blob(['name size type'], {name: event.target.files[0].name, size: event.target.files[0].size, type: event.target.files[0].type}, )))