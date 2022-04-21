
const repository = require('../models/posts')

const getPosts = ()=>{
    return repository.getPosts()
}

module.exports={
    getPosts,
}