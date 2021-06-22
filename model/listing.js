const User=require("./user")
const config=require('config')
const mongoose=require("mongoose")
mongoose.connect(config.get("connection.url"), { useNewUrlParser: true,useUnifiedTopology: true })
.then(()=>console.log("connected to mongodb database ..."))
.catch(err=>console.log("unable to connect to database because" + err))


const listingSchema=new mongoose.Schema({
    source:{
    type:String,
    required:true,
    maxlength:1024
},
secondsource: String,
 
thirdsource:String,

fourthsource:String,
 


    name:{
        type:String,
        required:true,
        minlength:3,
        maxlength:1000
    },
    price:{
type:Number,
required:true,
min:0
    },
    prevprice:{
        type:Number,
        required:true,
        min:0
    },
    description:{
        type:String,
        required:true,
        minlength:8,
        maxlength:700
    },
    category:{
        type:String,
        required:true,
         enum:["Cosmetics","Clothes", "Cameras", "null"]
    },

itemNumber:{
    type:Number,
    required:true,
    min:0
},

seller:{
    type:String,
  required:true,
  maxlength:1024
},
user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
},
Date:{
    type:Date,
    default:Date.now()
}


})
const Listings=mongoose.model("Listing", listingSchema)
module.exports=Listings
