const config=require('config')
const nodemailer=require('nodemailer');
// console.log(config.get('mailoptions.email'))
// const SMTPTransport = require('nodemailer/lib/smtp-transport');
// const smtpTransport = require('nodemailer-smtp-transport');
const sendemail=(recieverEmail,subject,text)=>{

const transporter=nodemailer.createTransport({
    service:"gmail",
    // host:"smtp.gmail.com",
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
       return error.message
    }else{
        console.log ("email sent successfully with staus code : " +info.response)
    }
})

return "yea"

}
module.exports=sendemail

// const config=require('config')
// console.log(config.get('connection.url'))