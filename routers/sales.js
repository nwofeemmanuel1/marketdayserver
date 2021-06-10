const express = require("express")
const Router = express.Router()
const Sales = require('../model/sales')
const validatesales = require("../validations/validatesales")
const validateSales = require('../validations/validatesales')
const protectRoute = require('../hash/protection')
const Listing = require('../model/listing')
const Joi = require('joi')
const User = require("../model/user")

const validateviewsales = (seller) => {
    const schema = {
        seller: Joi.string().email().required()
    }
    const result = Joi.validate({ seller }, schema)

    if (result.error) return result.error.details[0].message
    return true
}

Router.post("/viewsales", protectRoute, async (req, res) => {
    const isvalid = validateviewsales(req.body.seller,)
    if (isvalid == true) {
        try {
            const sales = await Sales.find({ seller: req.body.seller })
                .select('seller')
                .populate("Listing",)
            if (sales.length > 0) {
                res.json({ message: sales, error: false })
            } else { res.status(404).json({ errMessage: "please the user has not made any sale", error: true }) }

        } catch (err) {
            res.status(400).json({ errMessage: err.message, error: true })
        }



    } else {
        res.json({ errMessage: isvalid, error: true })
    }

})



const validateviewpurchase = (buyer) => {
    const schema = {
        buyer: Joi.string().email().required()
    }
    const result = Joi.validate({ buyer }, schema)

    if (result.error) return result.error.details[0].message
    return true
}

Router.post("/viewpurchase", protectRoute, async (req, res) => {
    const isvalid = validateviewpurchase(req.body.buyer,)
    if (isvalid == true) {
        try {
            const sales = await Sales.find({ buyer: req.body.buyer })
                .select('buyer')
                .populate("Listing",)
            if (sales.length > 0) {
                res.json({ message: sales, error: false })
            } else { res.status(404).json({ errMessage: " the user has not made any purchase", error: true }) }
        } catch (err) {
            res.status(400).json({ errMessage: err.message, error: true })
        }



    } else {
        res.json({ errMessage: isvalid, error: true })
    }

})


// protectRoute,


Router.post("/", rotectRoute, async (req, res) => {
    if (req.body.product) {


        for (let product of req.body.product) {
            // console.log(product)
            isvalid = validatesales(product.seller, req.body.buyer, req.body.totalPrice, product.Listing)
            if (isvalid !== true) return res.status(400).json({ error: true, errMessage: isvalid })
        }

        for (let product of req.body.product)
            if (product.seller === req.body.buyer) return res.json({ error: true, match: true, errMessage: "Please You cant buy your own Product Make sure its excluded from Cart" })

        try {
            const user = await User.findOne({ email: req.body.buyer })
            if (user) {


                if (user.balance >= parseInt(req.body.totalPrice)) {
                    user.set({
                        balance: user.balance - parseInt(req.body.totalPrice)
                    })
                    try {
                        req.body.product.forEach(async product => {
                            sold = await new Sales({
                                seller: product.seller,
                                buyer: req.body.buyer,
                                Listing: product.Listing
                            })
                            const finalResult = await sold.save()
                        })
                        const userResult = await user.save()
                        return res.json({ error: false, message: "success", accomplished: true })
                    } catch (err) {
                        res.status(400).json({ error: true, errMessage: err.message })
                    }

                } return res.json({ error: true, errMessage: "Insufficient balance add Fund and try again" })



            } return res.json({ error: true, errMessage: "unexpected Error database access is denied" })


        } catch (err) {
            return res.status(400).json({ error: true, errMessage: err.message })
        }



    } else {
        return res.status(400).json({ error: true, errMessage: "No Product Found" })
    }


})
module.exports = Router



