const multer=require('multer')
const uploads=multer({dest:"uploads/"})
console.log(uploads.single("productimage "))
