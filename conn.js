// const fetch=require("isomorphic-fetch")
// const fetchuser=async(seller,buyer,product,token,)=>{

// try{


// const response=await fetch("http://localhost:5000/api/listings/sales",{
//     method:"POST",
//     headers:{"content-type":"application/json"},
//     body:JSON.stringify({
     
//         seller:seller,
//         buyer:buyer,
//         product:product,
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

// fetchuser('nwe@gmail.com','enwofe@gmail.com',["ass","kka"], 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODAyNTBkNTFkYzc1MThkMGM0YjAzOCIsImlhdCI6MTYxOTM2NTcwMH0.RbOMuCMaLJgNKQ3WDLSTP7w5duNu5wZY-nszRveytvU')

























const fetch=require("isomorphic-fetch")
const fetchuser=async(subject,text,reciever,token,)=>{

try{


const response=await fetch("http://localhost:5000/api/seller/mail",{
    method:"POST",
    headers:{"content-type":"application/json"},
    body:JSON.stringify({
     
        subject:subject,
        text:text,
        reciever:reciever,
           token:token
    })
})

const result=await response.json()
console.log(result)

}catch(err){
    console.log(err.message)
}


}
// "gsgfysygy"

fetchuser('nodemailer and express','just trying to know if it works', 'enwofe2021@gmail.com')




