const express = require("express")
const app = express()
//미들웨어 설정
app.use("/",express.static(__dirname+'public'))
app.get('*',(req,res)=>{
	res.status(404).end()
})
app.get('/api/posts',(req,res)=>{
	res.send("HELLO SUNRIN").end()
})
app.get('/api/post/:post_id',(req,res)=>{
	let postId = req.params.post_id
	res.send("YOU REQUESTED TO "+postId);
})
