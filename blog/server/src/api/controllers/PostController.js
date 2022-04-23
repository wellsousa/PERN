const postServices = require('../services/posts')

const index = async (req, res)=>{
    const posts = await postServices.getPosts() 

    return res.json(posts.rows)
}

const create = async(req, res) =>{
    const post = await postServices.savePost(req.body)

    return res.json(post.rows)
}

const getPost = async(req, res)=>{
    const {id} = req.params

    const post = await postServices.getPost(id)

    return res.json(post.rows)
}

const updatePost = async(req, res)=>{
    const data = {
        id: req.params.id,
        body: req.body
    }

    const updatedPost = await postServices.updatePost(data)

    return res.json(updatedPost.rows)
}

const exclude = async(req, res)=>{
    const {id} = req.params

    const post = await postServices.deletePost(id)

    return res.json(post.rows)
}

module.exports ={
    index,
    create,
    getPost,
    updatePost,
    exclude,
}