const mongoose=require('mongoose')
const config=require("config")
const Listing=require('./listing')
mongoose.connect(config.get('connection.url'), { useNewUrlParser: true,useUnifiedTopology: true })
.then(()=>console.log("connected to user database ") )
.catch(err=>console.log(err) )

const salesSchema=new mongoose.Schema({
    seller:{
        type:String,
        required:true,
        maxlength:120
    },
    buyer:{
        type:String,
        required:true,
          maxlength:120
    },
  Listing:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Listing"
},
  date:{
    type:Date,
    default:Date.now()
  },
  pending:Boolean
})

const Sales=mongoose.model('sale',salesSchema)
module.exports= Sales
