// const Express = require('express');
// const multer = require('multer');


// const router = Express.Router();
// // router.use(Express.json())

// const Storage = multer.diskStorage({
//   destination(req, file, callback) {
//     callback(null, '../uploads');
//   },
//   filename(req, file, callback) {
//     callback(null, `${file.originalname}`);
//   },
// });

// const upload = multer({ storage: Storage, });


// router.post('/', upload.array('photo', 3), (req, res) => {
//   console.log('file', req.files);
//   console.log('body', req.body);
//   res.status(200).json({
//     message: 'success!',
//    file: req.files
//   });
// });

// module.exports=router















const express=require('express')
const multer =require('multer')
const router=express.Router()

const storage=multer.diskStorage({
    destination:function(req,file,callback){
callback(null,'./uploads')
    }, 

    filename:function(req,file,callback){
        callback(null, `${Math.random(20*2)}${file.originalname}` )
    }

})
const uploads=multer({storage:storage})




router.post('/',uploads.any('photo',1),(req,res)=>{
// console.log(req.files)
res.status(200).send( 'file' + req.files[0].filename)
})
module.exports=router