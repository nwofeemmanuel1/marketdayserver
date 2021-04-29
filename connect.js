const fetch=require("isomorphic-fetch")
const fetchuser=async(username,email,pasword)=>{

try{


const response=await fetch("https://marketdayserver.herokuapp.com/api/register",{
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

fetchuser('nwofe Emmanuel','enwofe@gmail.com', 'desolidesk')









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

// fetchuser('enwofe@gmail.com', 'desolidesk' )





// const fetch=require("isomorphic-fetch")
// const fetchget=async(token)=>{
// const response=await fetch("http://localhost:3000/api/listings",{
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













// const fetch=require("isomorphic-fetch")
// const fetchuser=async(url, secondurl,price,category,user)=>{

// try{


// const response=await fetch("http://localhost:5000/api/users/listings",{
//     method:"POST",
//     headers:{"content-type":"application/json"},
//     body:JSON.stringify({
//        url,
//        secondurl,
//       price,
//        category,
//        user
//     })
// })

// const result=await response.json()
// console.log(result)

// }catch(err){
//     console.log(err.message)
// }


// }
// // "gsgfysygy"

// fetchuser('any url just for clarity purpose','hahahaaa')


// const fetch=require('isomorphic-fetch')
// const fetchuser=async()=>{
// const response=await fetch('http://localhost:5000')
// const result= await response.text()
// console.log(result)
// }

// fetchuser()






