
const express = require('express')
const router = express.Router()
const PostController = require('../controllers/PostController')


router.get('/posts', (req, res)=> PostController.index(req, res))
router.get('/posts/:id', (req, res)=> PostController.get(req, res))
router.post('/posts', (req, res)=> PostController.create(req, res))
router.delete('/posts/:id', (req, res)=> PostController.remove(req, res))
router.put('/posts/:id', (req, res) => PostController.update(req, res))

module.exports = router