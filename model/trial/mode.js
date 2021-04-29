const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/market-day",{useNewUrlParser:true, useUnifiedTopology: true })
.then(()=>console.log("connected..."))
.catch(err=>console.log(err.message))
const userSchema=new mongoose.Schema({
  username:{
    type:String,
    required:true,
    minlength:6
  }
})

const listingSchema=new mongoose.Schema({
 user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  }
})

const User=mongoose.model("User", userSchema)
const Listing=mongoose.model("Listing",listingSchema)

createuser=async(username)=>{
  const user=new User({
    username
  })
  const result=await user.save()
  console.log(result)
}
createlisting=async(id)=>{
const listing=new Listing({
user:id 
})
const result=await listing.save()
 console.log(result)
}

const listCourse=async()=>{
  const listing=await Listing
  .find()
  .populate("user")
  console.log(listing)
}
listCourse()

// createuser("usernameagain")
// createlisting("607f5a000951110c8c686f46")

