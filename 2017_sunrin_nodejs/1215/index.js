const express = require('express')
const bodyParser
const multer = require('multer')

const controller = {
	post:require('./postController.js')
}


const Router = express.Router()
router.get('/api/posts')
router.post('api/posts/:post_id',controller.post.newPosts)
