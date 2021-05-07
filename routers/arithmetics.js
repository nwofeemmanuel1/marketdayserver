const express = require("express")
const validatebalance = require('../validations/validatearithmetic')
const User = require('../model/user')
const protectRoute = require('../hash/protection')
const router = express.Router()

router.put("/", protectRoute, async (req, res) => {
    const isvalid = validatebalance(req.body.email, req.body.balance)
    // res.json({message:isvalid})
    if (isvalid === true) {
        try {
            const user = await User.findOne({ email: req.body.email })
            if (user) {
                // res.json({message:user, error:false})
if(user.balance >= req.body.balance){
  user.set({
                    balance: user.balance - req.body.balance
          })
                const result = await user.save()
                // `success balance updated to $${result.balance}`
                res.json({ message:`success your balance is now $${result.balance}` , error: false })

}else{ res.status(403) .json({errMessage:"insufficient balance to update",error:true})}
              
            } else {
                res.status(403).json({ errMessage: "invalid user =>forbidden ", error: true })
            }


        } catch (err) {
            res.json({
                errMessage: err.message,
                error: true
            })
        }

    } else {
        res.json({
            errMessage: isvalid,
            error: true
        })
    }
})
module.exports = router