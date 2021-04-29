const multer=require('multer')

const uploadimage=()=>{

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'../uploads/')
    },
    filename:function(req,file,cb){
cb(null,file.originalname)
    }
})
const filefilter=(req,file,cb)=>{
if(file.mimetype === "image/jpeg" || file.mimetype ==="image/png") return cb(null,true)
cb(null,false)
}

const uploads=multer({storage:storage,fileFilter:filefilter})
}