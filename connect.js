
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

// fetchuser('nwofe Emmanuel','enwofe@gmail.com', 'desolidesk')





// /api/listings



// const fetch=require("isomorphic-fetch")

// const fetchuser=async(email,pasword)=>{
//     try{
          
// const response=await fetch("https://marketdayserver.herokuapp.com/api/login",{
//     method:"POST",
//     headers:{"content-type":"application/json"},
//     body:JSON.stringify({
      
//         email:email,
//         pasword:pasword
//     })
// })
// const result=await response.json()
// console.log(result)


//     }catch(err){
//         console.log(err)
//     }

// }

// fetchuser('enwofe@gmail.com','desolidesk'  )





// const fetch=require("isomorphic-fetch")
// const fetchget=async(token)=>{
// const response=await fetch("http://localhost:5000/api/listings",{
//     method:"POST",
//     headers:{"content-type":"application/json"},
//     body:JSON.stringify({
      
//        token:token
//     })
// })
// const result=await response.text()
// console.log(result)
// }

// fetchget('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODAyNTBkNTFkYzc1MThkMGM0YjAzOCIsImlhdCI6MTYxOTM2NTcwMH0.RbOMuCMaLJgNKQ3WDLSTP7w5duNu5wZY-nszRveytvU')









//balance sale and boughts


// "https://marketdayserver.herokuapp.com/api/users/listings"


// const fetch=require("isomorphic-fetch")
//  const fetchuser=async( token,seller,itemName,description,price,category)=>{

//  try{


//  const response=await fetch("http://localhost:5000/api/users/listings",{
//     method:"POST",
//   headers:{"content-type":"application/json"},
//    body:JSON.stringify({
//        token,
//      seller,
//      itemName,
//      description,
//      price,
//      category  
      
//     })
// })

// const result=await response.json()
// console.log(result)

// }catch(err){
//     console.log(err.message)
// }


// }
// "gsgfysygy"

// fetchuser("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwOGMwMDE3MDNjY2RiMDAyMjg0MTMzYSIsImlhdCI6MTYxOTc5MTg5MH0.1MqY444A7uDpiL96VzLzAikDwG1UPxhha0qp3it1qSQ",'enwofe@gmail.com',"shoes",'my first item',"20",'web')


// https://marketdayserver.herokuapp.com

// const fetch=require('isomorphic-fetch')
// const fetchuser=async(token,email,cardnumber,expirydate,csv,amount)=>{
// const response=await fetch('http://localhost:5000/api/users/deposit',{
//   method:"PUT",
//   headers:{"content-type":"application/json"},
//   body:JSON.stringify({
//     token,
//     email,
//  cardnumber,
     
//      expirydate,
//      csv,
//      amount
//     // country,
//     // phone,

//   })
// })
// const result= await response.text()
// console.log(result)
// }

// fetchuser("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwOGMwMDE3MDNjY2RiMDAyMjg0MTMzYSIsImlhdCI6MTYxOTc5MTg5MH0.1MqY444A7uDpiL96VzLzAikDwG1UPxhha0qp3it1qSQ",'enwofe@gmail.com',16,22/2/7,224,"20")




// const fetch=require('isomorphic-fetch')
// const fetchuser=async(token,email,balance)=>{
// const response=await fetch('https://marketdayserver.herokuapp.com/api/users/balance',{
//   method:"PUT",
//   headers:{"content-type":"application/json"},
//   body:JSON.stringify({
//     token,
//     email,
// //  cardnumber,
// balance
     
// //      expirydate,
// //      csv,
// //      amount
// //     // country,
//     // phone,

//   })
// })
// const result= await response.text()
// console.log(result)
// }

// fetchuser("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwOGMwMDE3MDNjY2RiMDAyMjg0MTMzYSIsImlhdCI6MTYxOTc5MTg5MH0.1MqY444A7uDpiL96VzLzAikDwG1UPxhha0qp3it1qSQ",'enwofe2020@gmail.com',214)




// const fetch=require('isomorphic-fetch')
// const fetchuser=async()=>{
//   const response=  await fetch('https://marketdayserver.herokuapp.com/')
//   const result=await response.text()
//   console.log(result)
// }
// fetchuser()







// const fetch=require("isomorphic-fetch")

// const fetchuser=async(token,email,username,country,phone)=>{
//     try{
          
// const response=await fetch("http://localhost:5000/api/user/update",{
//     method:"PUT",
//     headers:{"content-type":"application/json"},
//     body:JSON.stringify({
//    token:token,
//         email:email,
// username:username,
// country:country,
// phone:phone

//     })
// })
// const result=await response.text()
// console.log(result)


//     }catch(err){
//         console.log(err)
//     }

// }

// fetchuser("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwOGMwMDE3MDNjY2RiMDAyMjg0MTMzYSIsImlhdCI6MTYxOTc5MTg5MH0.1MqY444A7uDpiL96VzLzAikDwG1UPxhha0qp3it1qSQ",'enwofe@gmail.com','nwofe chiemelie',"niger",08060304393)







// const fetch=require("isomorphic-fetch")

// const fetchuser=async(token,email,)=>{
//     try{
          
// const response=await fetch("http://localhost:5000/api/user/update/me",{
//     method:"POST",
//     headers:{"content-type":"application/json"},
//     body:JSON.stringify({
//    token:token,
//         email:email,


//     })
// })
// const result=await response.text()
// console.log(result)


//     }catch(err){
//         console.log(err)
//     }

// }

// fetchuser("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwOGMwMDE3MDNjY2RiMDAyMjg0MTMzYSIsImlhdCI6MTYxOTc5MTg5MH0.1MqY444A7uDpiL96VzLzAikDwG1UPxhha0qp3it1qSQ",'enwofe@gmail.com','nwofe chiemelie',)














// const fetch=require("isomorphic-fetch")

// const fetchuser=async(email,pasword)=>{
//     try{
          
// const response=await fetch("http://localhost:5000/api/login",{
//     method:"POST",
//     headers:{"content-type":"application/json"},
//     body:JSON.stringify({
      
//         email:email,
//         pasword:pasword
//     })
// })
// const result=await response.json()
// console.log(result)


//     }catch(err){
//         console.log(err)
//     }

// }

// fetchuser('enwofe2020@gmail.com', 'desolidesk')
























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
// // "gsgfysygy"

// fetchuser('nwofe Emmanuel','enwofe2020@gmail.com', 'desolidesk')










// const fetch=require('isomorphic-fetch')
//   getlistings=async(token)=>{
//   const response=  await fetch("http://localhost:5000/api/listings",{
//     method:"POST",
//     headers:{"content-type":"application/json"},
//     body:JSON.stringify({
//       token
//     })
//   })
//   const result=await response.json()
//   console.log(result)
//   }

//   getlistings("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwOGMwMDE3MDNjY2RiMDAyMjg0MTMzYSIsImlhdCI6MTYxOTc5MTg5MH0.1MqY444A7uDpiL96VzLzAikDwG1UPxhha0qp3it1qSQ")



























// const fetch=require('isomorphic-fetch')
//   getlistings=async(token)=>{
//   const response=  await fetch("http://localhost:5000/api/listings",{
//     method:"POST",
//     headers:{"content-type":"application/json"},
//     body:JSON.stringify({
//       token
//     })
//   })
//   const result=await response.json()
//   console.log(result)
//   }

//   getlistings("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwOGQ1YWZjMWMwNzk5MTUwNGNlZWIzMSIsImlhdCI6MTYxOTg3NjYwNH0.aqovqo3uydP931uWyt6akj2Rrbr6x6BI2i8xG9M14KE")








// const fetch=require("isomorphic-fetch")
// const fetchuser=async(username,email,pasword)=>{

// try{
// https://marketdayserver.herokuapp.com

// const response=await fetch("https://marketdayserver.herokuapp.com/api/register",{
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
// // "gsgfysygy"

// fetchuser('anonymous','nwofeeM@gmail.com','desolidesk' )













 const fetch=require("isomorphic-fetch")

 const fetchuser=async()=>{
    const response= await fetch("http://localhost:5000/api/user/verifyProduct",{
         method:"DELETE",
         headers:{"content-type":"application/json"},
         body:JSON.stringify({id:'60c343575164291610578013'})
     })
    const result= await response.json()
    console.log(result)
 }
 fetchuser()
