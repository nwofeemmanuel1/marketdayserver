const express=require("express")
const app=express()
const display=require("./functions/display")
const Listings= require("./model/listing")
const register=require("./routers/register")
const login=require("./routers/login")
const protect=require('./hash/protection')
const User=require('./model/user')
const listings=require('./routers/listings')

// console.log(User.validatelogin)
app.use(express.json())
app.use('/api/users/listings',listings)
app.use("/api/register",register )
app.use("/uploads", express.static('./uploads'))

app.get('/',(req,res)=>{
    res.send('connected !!')
})

app.use("/api/login", login)

app.post("/api/listings",protect,async(req,res)=>{
try{
      const result= await display()
    
  if(!result || result.length <=0) return res.send("please no one has placed a listing on the app so far") 
  res.send(result)
}catch(error){
    console.log(error.message)
}
})


const port=process.env.PORT || 5000
app.listen(port, ()=>console.log("running..."))