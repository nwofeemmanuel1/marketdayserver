const User=require("./user")
const config=require('config')
const mongoose=require("mongoose")
mongoose.connect(config.get("connection.url"), { useNewUrlParser: true,useUnifiedTopology: true })
.then(()=>console.log("connected to mongodb database ..."))
.catch(err=>console.log("unable to connect to database because" + err.message))


const listingSchema=new mongoose.Schema({
url:{
    type:String,
    required:true
},
secondurl:{
    type:String,  
    // required:true
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

const Listings=mongoose.model("Listing", listingSchema)
module.exports=Listings




























// const createlisting=async()=>{
// const listing=await new Listings({
// url:"jshhskijsih",
// price:20,
// category:"web",
// user:"60800398bc61ca0c683758a2"
// })
// const result=await listing.save()
// console.log(result)
// }
// createlisting()


// listitems=async()=>{
//    const result= await Listings
//    .find()
// .populate("user", "username")
//  console.log(result)
// }
// listitems()