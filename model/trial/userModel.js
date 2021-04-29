const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/market-day",{useNewUrlParser:true, useUnifiedTopology: true })
.then(()=>console.log("connected..."))
.catch(err=>console.log(err.message))

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        minlength:6,

    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    pasword:{
        type:String,
        required:true,
        minlength:8
    },
   
})
const listingSchema=new mongoose.Schema({
url:{
    type:String,
    required:true
},
price:{
    type:Number,
    required:true,
    min:0
},
category:{
    type:String,
    enum:["web","site", "dev"]
},
user:{
    type:mongoose.Schema.Types.ObjectId,
ref:"User",
// required:true
},
Date:{
    type:Date,
    default:Date.now()}
})

const User=mongoose.model("User",userSchema)
const Listings=mongoose.model("Listing", listingSchema)





const createuser=async()=>{
   const user= await new User({
       username:"nwofe emmanuel",
       email:"enwofe2020@gmail.com",
       pasword:"dede123456"
   })
  const result= await user.save()
  console.log(result)
}

const createcourse=async()=>{
const listing=await new Listings({
url:"jshhskijsih",
price:20,
category:"web",
user:"607f5be4350e210d94e9223f"
})
const result=await listing.save()
console.log(result)
}

listitems=async()=>{
   const result= await Listings
   .find()
.populate("user")
 console.log(result)
}

// listitems()
createuser()
// createcourse()

// module.exports.userSchema=userSchema;
// module.exports.listingSchema=listingSchema