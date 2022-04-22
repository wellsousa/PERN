
const express = require('express')
const router = express.Router()
const PostController = require('../controllers/PostController')


router.get('/posts', (req, res)=> PostController.index(req, res))
router.get('/posts/:id')
router.post('/posts', (req, res)=> PostController.create(req, res))
router.delete('/posts/:id', (req, res)=> PostController.exclude(req, res))
router.put('/posts/:id')

module.exports = router