// const config=require('config')
// const nodemailer=require('nodemailer');
// // console.log(config.get('mailoptions.email'))
// // const SMTPTransport = require('nodemailer/lib/smtp-transport');
// // const smtpTransport = require('nodemailer-smtp-transport');
// const sendemail=(recieverEmail,subject,text)=>{

// const transporter=nodemailer.createTransport({
//     service:"gmail",
//     // host:"smtp.gmail.com",
//     auth:{
//         user:config.get('mailoptions.email'),
//         pass:config.get('mailoptions.pasword')
//     }
// })
// const mailOptions={
//     from:config.get('mailoptions.email'),
//     to:recieverEmail,
//     subject:subject,
//     text:text,
//     attachments:[{
//     filename:"picture.jpg",
//     path:'./picture.jpg'
// }]
// };

// transporter.sendMail(mailOptions,function(error,info){
//     if(error){
//         console.log(error.message)
//     }else{
//         console.log("email sent successfully with staus code : " +info.response)
//     }
// })


// }

// sendemail('enwofe2021@gmail.com','Wow Am happy to use nodemailer and send file','well i have actually made the nodemailer email support working on my computer and am happy to send u email with it')



const config=require('config')
console.log(config.get('connection.url'))