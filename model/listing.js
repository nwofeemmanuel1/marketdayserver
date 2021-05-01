const User=require("./user")
const config=require('config')
const mongoose=require("mongoose")
mongoose.connect(config.get("connection.url"), { useNewUrlParser: true,useUnifiedTopology: true })
.then(()=>console.log("connected to mongodb database ..."))
.catch(err=>console.log("unable to connect to database because" + err.message))


const listingSchema=new mongoose.Schema({
itemNumber:{
    type:Number,
    required:true,
    min:0
},
price:{
    type:Number,
    required:true
},
name:{
    type:String,
    required:true
},
seller:{
    type:String,
  required:true
},
source:{
    type:String,
    required:true,
    max:1024
},
 prevprice:{
     type:Number,
     rquired:true
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
    default:Date.now()
}


})
// url:{
//     type:String,
//     required:true
// },
// secondurl:{
//     type:String,  
//     // required:true
// },

// price:{
//     type:Number,
//     required:true,
//     min:0
// },
// category:{
//     type:String,
//     enum:["web","site", "dev"]
// },
// user:{
//     type:mongoose.Schema.Types.ObjectId,
// ref:"User",
// // required:true
// },
// Date:{
//     type:Date,
//     default:Date.now()}

//    ItemNumber: Joi.number().min(0),
//         price:Joi.number().min(0).required(),
//         name:Joi.string().min(3).required,
//          seller: Joi.strng().required,
//           source: Joi.string().required(),
//         prevprice: Joi.number().required(),
//         user:Joi.string().required(),
//         category:Joi.string().max(9).required(),
//         // sellerid: 1 
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