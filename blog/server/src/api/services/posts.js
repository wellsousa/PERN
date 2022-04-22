
const PostModel = require('../models/PostModel')

const getPosts = ()=>{
    return PostModel.getPosts()
}

const savePost = (post)=>{
    return PostModel.savePost(post)
}

const deletePost = (id)=>{
    return PostModel.deletePost(id)
}

module.exports={
    getPosts,
    savePost,
    deletePost,
}