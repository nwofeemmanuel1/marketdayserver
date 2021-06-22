//registration///

// const fetch=require("isomorphic-fetch")
// const fetchuser=async(username,email,pasword)=>{

// try{


// const response=await fetch("http://localhost:5000/api/register",{
//     method:"POST",
//     headers:{"content-type":"application/json"},
//     body:JSON.stringify({
//         username:username,
//         email:email,
//         pasword:pasword
//     })
// })

// const result=await response.json()
// console.log(result)

// }catch(err){
//     console.log(err.message)
// }


// }
// "gsgfysygy"

// fetchuser('nwofe Emmanuel','buyer@gmail.com', 'desolidboy1')


//creatring a listing ===---

const fetch=require("isomorphic-fetch")
const fetchuser=async()=>{
const response=await fetch("http://localhost:5000/api/users/listings",{
    method:"POST",
    headers:{"content-type":"application/json"},
    body:JSON.stringify({
        token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODAyNTBkNTFkYzc1MThkMGM0YjAzOCIsImlhdCI6MTYxOTM2NTcwMH0.RbOMuCMaLJgNKQ3WDLSTP7w5duNu5wZY-nszRveytvU",
        uploadImage:["haha","haha","heh2",],
   //      source:"HAHAHAHAHA",
   //      secondsource:"HAHAHA can it sort ",
   //      thirdsource:"HAHA the same applies here",
        name:"latest update",
        price:20,
     description:"string description",
     category:"null",
     seller:"enwofe@gmail.com.com",
     user:"60c726a9afd27015540303c9"
    })
} )


const result=await response.text()
console.log(result)

}

// // setInterval(()=>fetchuser(),500)

fetchuser()







//creating a sale ----

// const fetch=require("isomorphic-fetch")
// const fetchuser=async(token,seller,buyer,totalPrice,Listing)=>{
// try{

// const response=await fetch("http://localhost:5000/api/listings/sales",{
//     method:"POST",
//     headers:{"content-type":"application/json"},
//     body:JSON.stringify({
//         token:token,
//         buyer,
//         totalPrice,
//         product:[
//             {seller:seller, Listing},
//         ]
//     })
// })

// const result=await response.json()
// console.log(result)

// }catch(err){
//     console.log(err.message)
// }
// }
// fetchuser('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYzcyNmE5YWZkMjcwMTU1NDAzMDNjOSIsImlhdCI6MTYyMzY2NDI5N30.gfoXHYYSIapS9E9w_MITuHlR1g-Otf_NDxgAVJ3x0ts',"enwofe@gmail.com","buyer@gmail.com",20,"60c72dec7d6eb00e18a17aed")



// //-----verifying a sale
// //remember ------------

//  const fetch=require("isomorphic-fetch")

//  const fetchuser=async( token,email,amount)=>{
//     const response= await fetch("http://localhost:5000/api/user/viewbalance/debit",{
//          method:"PUT",
//          headers:{"content-type":"application/json"},
//          body:JSON.stringify({token,email,amount})
//      })
//     const result= await response.json()
//     console.log(result)
//  }
//  fetchuser('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYzcyNmE5YWZkMjcwMTU1NDAzMDNjOSIsImlhdCI6MTYyMzY2NDI5N30.gfoXHYYSIapS9E9w_MITuHlR1g-Otf_NDxgAVJ3x0ts',"buyer@gmail.com",2)


















































// const fetch=require("isomorphic-fetch")
// const fetchuser=async(token,seller)=>{

// try{


// const response=await fetch("https://marketdayserver.herokuapp.com/api/listings/sales/viewsales",{
//     method:"POST",
//     headers:{"content-type":"application/json"},
//     body:JSON.stringify({
//         token:token,
//         seller:seller,
       
        
//     })
// })

// const result=await response.json()
// if(result.error==true){
//     console.log(result)
// }else{
//     console.log(result.message)
// }
// // console.log(result)

// }catch(err){
//     console.log(err.message)
// }


// }
// // "gsgfysygy"

// fetchuser("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODAyNTBkNTFkYzc1MThkMGM0YjAzOCIsImlhdCI6MTYxOTM2NTcwMH0.RbOMuCMaLJgNKQ3WDLSTP7w5duNu5wZY-nszRveytvU",'marketday@gmail.com')
















// const fetch=require("isomorphic-fetch")
// const fetchuser=async(subject,text,reciever,token,)=>{

// try{


// const response=await fetch("https://marketdayserver.herokuapp.com/api/seller/mail",{
//     method:"POST",
//     headers:{"content-type":"application/json"},
//     body:JSON.stringify({
     
//         subject:subject,
//         text:text,
//         reciever:reciever,
//            token:token
//     })
// })

// const result=await response.json()
// console.log(result)

// }catch(err){
//     console.log(err.message)
// }


// }
// // "gsgfysygy"

// fetchuser('nodemailer and express on the web','chidera if this works i will be glad', 'enwofe2021@gmail.com')


























//Remember i implemented this as a ddos attack to affect the server

//  const fetch=require("isomorphic-fetch")

//  const fetchuser=async()=>{
//     const response= await fetch("http://localhost:5000/api/user/verifyProduct",{
//          method:"DELETE",
//          headers:{"content-type":"application/json"},
//          body:JSON.stringify({id:'60c343575164291610578013'})
//      })
//     const result= await response.json()
//     console.log(result)
//  }
// //  fetchuser()

// //  setInterval(()=>fetchuser(),1)

// for (let index=1; index <30000; index++){
//     // console.log(index)
//      setInterval(()=>fetchuser(),1)
















//toke 
//  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYzcyNmE5YWZkMjcwMTU1NDAzMDNjOSIsImlhdCI6MTYyMzY2NDI5N30.gfoXHYYSIapS9E9w_MITuHlR1g-Otf_NDxgAVJ3x0ts'