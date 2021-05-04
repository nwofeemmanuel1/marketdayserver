// const fetch=require("isomorphic-fetch")
// const fetchuser=async(username,email,pasword)=>{

// try{


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

// fetchuser('nwofe Emmanuel','enwofe@gmail.com', 'desolidesk')









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
//  const fetchuser=async( itemNumber,price,name ,seller,source,prevprice,category,user)=>{

//  try{


//  const response=await fetch("https://marketdayserver.herokuapp.com/api/users/listings",{
//     method:"POST",
//   headers:{"content-type":"application/json"},
//    body:JSON.stringify({
//         itemNumber,
//         price,
//         name,
//          seller,
//           source,
//         prevprice,
//           category,
//         user,
      
//     })
// })

// const result=await response.text()
// console.log(result)

// }catch(err){
//     console.log(err.message)
// }


// }
// // "gsgfysygy"

// fetchuser(1,50,"car",'nwofe emmanuel','https://picsum.photos/200/300?grayscale',50,'web','608c00a95b76cf0598620683')


// const fetch=require('isomorphic-fetch')
// const fetchuser=async()=>{
// const response=await fetch('http://localhost:5000')
// const result= await response.text()
// console.log(result)
// }

// fetchuser()





// const fetch=require('isomorphic-fetch')
// const fetchuser=async()=>{
//   const response=  await fetch('https://marketdayserver.herokuapp.com/')
//   const result=await response.text()
//   console.log(result)
// }
// fetchuser()



















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
























const fetch=require("isomorphic-fetch")
const fetchuser=async(username,email,pasword)=>{

try{


const response=await fetch("http://localhost:5000/api/register",{
    method:"POST",
    headers:{"content-type":"application/json"},
    body:JSON.stringify({
        username:username,
        email:email,
        pasword:pasword
    })
})

const result=await response.json()
console.log(result)

}catch(err){
    console.log(err.message)
}


}
// "gsgfysygy"

fetchuser('nwofe Emmanuel','enwofe2020@gmail.com', 'desolidesk')










// const fetch=require('isomorphic-fetch')
//   getlistings=async(token)=>{
//   const response=  await fetch("https://marketdayserver.herokuapp.com/api/listings",{
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
// // https://marketdayserver.herokuapp.com

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

