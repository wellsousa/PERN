
const express = require('express')
const router = express.Router()
const PostsController = require('../controllers/PostsController')


router.get('/posts', (req, res)=> PostsController.index(req, res))
router.get('/posts/:id')
router.post('/posts')
router.delete('/posts/:id')
router.put('/posts/:id')

module.exports = router