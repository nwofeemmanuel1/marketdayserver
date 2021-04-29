const express=require('express')
const multer=require('multer')
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./uploads')
    },
    filename:(req,file,cb)=>{
        cb(null,`${Math.random(838732892398+873*3763)}${file.originalname}`)
    }
})
const filefilter=(req,file,cb)=>{
    if(file.mimetype == "image/jpeg" || file.mimetype=="image/png"){
        cb(null,true)
        console.log(`a new file has been saved to the database with name ${file.originalname}..`)
    }else{
        cb(null,false)
        console.log('a new file was recieved but not saved to database...')
    }}

const uploads=multer({storage:storage,fileFilter:filefilter,limits:{fileSize:1024*1024*5}})
const app=express()
app.use(express.json())
app.use("/uploads", express.static('./uploads'))


app.get('/',(req,res)=>{
    res.send(`you requested for a resource`)
  
})

app.post('/api/i',(req,res)=>{
    res.send(req)
})

app.post("/api/listings",uploads.any('images'),(req,res)=>{
    if(!req.files[0].originalname)return res.send('invalid resource sent')
    
    res.send(`http://localhost:3000/${req.files[0].path}  to view image`)
})
// app.listen('/api/listings',(req,res)=>{
//     res.send("hello world")
// })
const port=process.env.PORT || 3000
app.listen(port,()=>console.log(`listening on port ${port}...`))