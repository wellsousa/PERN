
const PostModel = require('../models/PostModel')

const getPosts = ()=>{
    return PostModel.getPosts()
}

const savePost = (post)=>{
    return PostModel.savePost(post)
}

const getPost = (id)=>{
    return PostModel.getPost(id)
}

const updatePost = (data)=>{
    return PostModel.updatePost(data)
}

const deletePost = (id)=>{
    return PostModel.deletePost(id)
}

module.exports={
    getPosts,
    savePost,
    getPost,
    updatePost,
    deletePost,
}