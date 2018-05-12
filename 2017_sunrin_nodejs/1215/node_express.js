const express = require("express")
const bodyParser = require('body-parser')
const multer = require('multer')
const app = express()

const dStorage = multer.diskStorage({
	destination : (req, fie, cb)=>{
		cb(null,'public/uploads/')
	},
	filename:(req,file,cb)=>{
		console.log('file')
		cb(null,file.originalname)
	}
})

//const mStorage = multer.memoryStorage()
const upload = multer({storage:dStorage})
//미들웨어 설정
app.use("/",express.static(__dirname+'public'))
/*
app.use(bodyParser.urlencoded({
    extended:true
}))
*/
console.log("server start");
app.get('*',(req,res)=>{
    console.log("asdf");
    res.status(404).end()
})
app.get('/api/posts',(req,res)=>{
    res.send("HELLO SUNRIN").end()
})
app.post('/api/posts',upload.any(),(req,res)=>{
    //res.send(req.body.title+"perfect");
    res.status(200).end()
})
app.get('/api/post/:post_id',(req,res)=>{
    let postId = req.params.post_id
    res.send("YOU REQUESTED TO "+postId);
})
app.listen(3333)

