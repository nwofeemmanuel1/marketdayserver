const router = require('express').Router()
const Listings = require('../model/listing')
const User = require('../model/user')
const validatelisting = require('../validations/validatelisting')
// const multipart=require('multipart-formdata')
const protect = require('../hash/protection')


const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, `${Math.random(45000 * 6515 * 23 + 1)}${file.originalname}`)
    }
})
const filefilter = (req, file, cb) => {

    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") return cb(null, true)
    cb(null, false)
}

const uploads = multer({ storage: storage, fileFilter: filefilter })




// router.post('/post', uploads.any("photo",1), (req, res) => {
//    console.log( req.files)
//    res.send('created' + req.files[0])

// })


router.post('/post', uploads.array('photo', 3), (req, res) => {
  console.log('file', req.files);
  console.log('body', req.body);
  res.status(200).json({
    message:req.files ,
  });
});




router.post('/', protect, uploads.any("photo", 2), async (req, res) => {

    const listingisvalid = validatelisting(req.body.seller, req.body.itemName, req.body.description, parseInt(req.body.price), req.body.category)
    if (listingisvalid === true) {

        const user = await User.findOne({ email: req.body.seller })
        if (user) {
            const listingresult = await Listings.find()
            try {
                const listing = await new Listings({

                    itemNumber: listingresult.length + 1,
                    price: req.body.price,
                    name: req.body.itemName,
                    seller: req.body.seller,
                    source: 'hardcoded source but would be changed later',
                    prevprice: req.body.price,
                    category: req.body.category,
                    user: user._id,

                    // sellerid: 1 
                })
                const result = await listing.save()
                res.json({ message: result, error: false })
            } catch (err) {
                res.status(400).json({ errMessage: err.message, error: true })
            }


        } else {
            res.json({ message: "no user found", error: true })
        }

    } else {
        res.json({ errMessage: listingisvalid, error: true })
    }

})

module.exports = router