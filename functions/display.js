const User=require("../model/user")
const Listings=require("../model/listing")
const display=async()=>{
  const result =  await Listings
    .find()
    .populate('user' ,"username userIcon  -_id")
    // .select('username  userIcon')
    return result
}
module.exports=display