
const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://playground:desolidboy1@cluster0.vnuog.mongodb.net/marketday", { useNewUrlParser: true,useUnifiedTopology: true })
.then(()=>console.log("connected to mongodb database ..."))
.catch(err=>console.log("unable to connect to database because" + err.message))


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
    userIcon:{
        type:String,    
    },
    date:{
        type:Date,
        default:Date.now()
    }
   
})
  


const User=mongoose.model("User",userSchema)
module.exports=User































// const User=mongoose.model("User",userSchema)

// const createNewUser=async()=>{
// const user=await new User({
//  username:"nwofe emmanuel",
//        email:"enwofe2020@gmail.com",
//        pasword:"dede123456"
// })
// const result=await user.save()
// console.log(result)
// }
// // createNewUser()