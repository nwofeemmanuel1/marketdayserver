const User=require("../model/user")
const Listings=require("../model/listing")
const display=async()=>{
  const result =  await Listings
    .find()
    .sort({_id:-1})
    .populate('user' ,"username userIcon email -_id")
    // .select('username  userIcon')
    return result
}
module.exports=display