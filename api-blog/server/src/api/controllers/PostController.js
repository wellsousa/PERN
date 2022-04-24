const postServices = require('../services/posts')

const index = async (req, res)=>{
    const posts = await postServices.list() 

    return res.json(posts.rows)
}

const create = async(req, res) =>{
    const post = await postServices.create(req.body)

    return res.json(post.rows)
}

const get = async(req, res)=>{
    const {id} = req.params

    const post = await postServices.get(id)

    return res.json(post.rows)
}

const update = async(req, res)=>{
    const data = {
        id: req.params.id,
        body: req.body
    }

    const updatedPost = await postServices.update(data)

    return res.json(updatedPost.rows)
}

const remove = async(req, res)=>{
    const {id} = req.params

    const post = await postServices.remove(id)

    return res.json(post.rows)
}

module.exports ={
    index,
    create,
    get,
    update,
    remove,
}