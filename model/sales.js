const mongoose=require('mongoose')
const config=require("config")
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
  product:{
      type:Array,
      required:true,
  },
  date:{
    type:Date,
    default:Date.now()
  },
  pending:Boolean
})

const Sales=mongoose.model('sale',salesSchema)
module.exports= Sales
