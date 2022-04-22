const postServices = require('../services/posts')

const index = async (req, res)=>{
    const posts = await postServices.getPosts() 

    return res.json(posts.rows)
}

const create = async(req, res) =>{
    const post = await postServices.savePost(req.body)

    return res.json(post.rows)
}

const exclude = async(req, res)=>{
    console.log(req)
    const {id} = req.params
    const post = await postServices.deletePost(id)

    return res.json(post.rows)
}

module.exports ={
    index,
    create,
    exclude,
}