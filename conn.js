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
//           {seller:"seller@gmail.com", Listing},
//            {seller:"dede@gmail.com", Listing,}
//         ]
//     })
// })

// const result=await response.json()
// console.log(result)

// }catch(err){
//     console.log(err.message)
// }
// }
// fetchuser('"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwOGMwMDE3MDNjY2RiMDAyMjg0MTMzYSIsImlhdCI6MTYxOTc5MTg5MH0.1MqY444A7uDpiL96VzLzAikDwG1UPxhha0qp3it1qSQ" ',"seller@gmail.com","enwofe@gmail.com",60,"608d1aa7f2723815bc5455fb")


//'


//'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODAyNTBkNTFkYzc1MThkMGM0YjAzOCIsImlhdCI6MTYxOTM2NTcwMH0.RbOMuCMaLJgNKQ3WDLSTP7w5duNu5wZY-nszRveytvU',"","","608d1aa7f2723815bc5455fb"




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










// const fetch=require("isomorphic-fetch")
// const fetchuser=async()=>{
// const response=await fetch("http://localhost:5000/api/users/listings",{
//     method:"POST",
//     headers:{"content-type":"application/json"},
//     body:JSON.stringify({
//         token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODAyNTBkNTFkYzc1MThkMGM0YjAzOCIsImlhdCI6MTYxOTM2NTcwMH0.RbOMuCMaLJgNKQ3WDLSTP7w5duNu5wZY-nszRveytvU",
//         source:"unknown",
//         secondsource:2,
//         thirdsource:"",
//         fourthsource:"",
//         name:"name",
//         price:20,
//      description:"string description",
//      category:"null",
//      seller:"seller@gmail.com",
//      user:"60c34364e6aad615846cdcee"
//     })
// } )


// const result=await response.text()
// console.log(result)

// }
// // // "gsgfysygy"
// // // setInterval(()=>fetchuser(),500)

// fetchuser()









 const fetch=require("isomorphic-fetch")

 const fetchuser=async(id)=>{
    const response= await fetch("http://localhost:5000/api/user/verifyProduct",{
         method:"DELETE",
         headers:{"content-type":"application/json"},
         body:JSON.stringify({id})
     })
    const result= await response.json()
    console.log(result)
 }
 fetchuser('60c3435be6aad615846cdcdd')




















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
// }