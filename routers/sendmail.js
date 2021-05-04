const express=require('express')
const router=express.Router()
const config=require('config')
const nodemailer=require('nodemailer');
const validatemail=require('../validations/validatemailer')




router.post("/", (req,res)=>{
const isvalid=validatemail(req.body.subject,req.body.text,req.body.reciever)
if(isvalid === true){




 const sendemail=(recieverEmail,subject,text)=>{

const transporter=nodemailer.createTransport({
    service:"gmail",
    host:"smtp.gmail.com",
    auth:{
        user:config.get('mailoptions.email'),
        pass:config.get('mailoptions.pasword')
    }
})
const mailOptions={
    from:config.get('mailoptions.email'),
    to:recieverEmail,
    subject:subject,
    text:text,
    attachments:[{
    filename:"picture.jpg",
    path:'./picture.jpg'
}]
};

transporter.sendMail(mailOptions,function(error,info){
    if(error){
       res.json({ errMessage: error, error:true}) 
    }else{
        res.json({ 
            message:"email sent successfully with staus code : " +info.response,
            error :false
        })
        // console.log ("email sent successfully with staus code : " +info.response)
    }
})



}
    
sendemail(req.body.reciever,req.body.subject,req.body.text)









}else{
  
     res.json({
       errMessage:isvalid,
       error:true
     })
}
    // console.log(config.get('connection.url'))

   

})


module.exports=router



// const config=require('config')
// console.log(config.get('connection.url'))