// const fetch=require("isomorphic-fetch")
// const fetchuser=async(token,seller,buyer,Listing,)=>{

// try{


// const response=await fetch("http://localhost:5000/api/listings/sales",{
//     method:"POST",
//     headers:{"content-type":"application/json"},
//     body:JSON.stringify({
//         token:token,
//         seller:seller,
//         buyer:buyer,
//         Listing:Listing,
      
//     })
// })

// const result=await response.json()
// console.log(result)

// }catch(err){
//     console.log(err.message)
// }


// }
// // "gsgfysygy"

// fetchuser('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODAyNTBkNTFkYzc1MThkMGM0YjAzOCIsImlhdCI6MTYxOTM2NTcwMH0.RbOMuCMaLJgNKQ3WDLSTP7w5duNu5wZY-nszRveytvU',"despacito@gmail.com","marketday@gmail.com","608d1aa7f2723815bc5455fb",)

// 'nwe@gmail.com','enwofe@gmail.com','608c00a95b76cf0598620683', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODAyNTBkNTFkYzc1MThkMGM0YjAzOCIsImlhdCI6MTYxOTM2NTcwMH0.RbOMuCMaLJgNKQ3WDLSTP7w5duNu5wZY-nszRveytvU'







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










const fetch=require("isomorphic-fetch")
const fetchuser=async()=>{
const response=await fetch("http://localhost:5000/api/users/listings",{
    method:"POST",
    headers:{"content-type":"application/json"},
    body:JSON.stringify({
        source:"source",
        secondsource:"secondsource",
        thirdsource:"thirdsource",
        fourthsource:"fourthsource",
        name:"name",
        price:20,
     description:"string description",
     category:"null",
     seller:"seller@gmail.com",
     user:"609503d28c825c00644c0b33"
    })
} )


const result=await response.text()
console.log(result)

}
// "gsgfysygy"

fetchuser()













