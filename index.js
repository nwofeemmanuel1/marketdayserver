const express=require("express")
const app=express()
const display=require("./functions/display")
// const Listings= require("./model/listing")
const register=require("./routers/register")
const login=require("./routers/login")
const protect=require('./hash/protection')
const User=require('./model/user')
const listings=require('./routers/listings')
const cool = require('cool-ascii-faces');
const sales=require('./routers/sales')
const mailer=require("./routers/sendmail")
const updateuser=require('./routers/updateuser')
const updateuserbalance=require("./routers/arithmetics")
const deposit=require("./routers/deposit")
const viewbalance=require('./routers/viewbalance')

// console.log(User.validatelogin)
app.use(express.json())



app.use("/uploads", express.static('./uploads'))

app.use('/api/users/listings',listings)
app.use("/api/register",register )

app.use("/api/login", login)

  app.get('/cool', (req, res) => res.send(cool()))
  
  app.use("/api/listings/sales", sales)

app.use('/api/seller/mail',mailer)
app.use('/api/user/update',updateuser)
app.use('/api/users/balance',updateuserbalance)
app.use('/api/users/deposit',deposit)
app.use('/api/user/viewbalance',viewbalance)


app.get('/',(req,res)=>{
    res.send('updated just now !')
})

app.post("/api/listings",protect,async(req,res)=>{
try{
      const result= await display()
    
    if(!result || result.length <=0) return res.send({errMessage: "please no one has placed a listing on the app so far", error:true }) 
  res.send(result)
}catch(error){
    console.log(error.message)
}
})



const port=process.env.PORT || 5000
app.listen(port, ()=>console.log("running..."))







//  console.log(  event.target.files[0], formData.append("photo",new Blob(['name size type'], {name: event.target.files[0].name, size: event.target.files[0].size, type: event.target.files[0].type}, )))

            // console.log(  event.target.files[0], formData.append("photo",new Blob([files= event.target.files[0],name= event.target.files[0].name, size= event.target.files[0].size, type=event.target.files[0].type ], {name: event.target.files[0].name, size: event.target.files[0].size, type: event.target.files[0].type}, )))