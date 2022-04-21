const postsBusinnes = require('../services/posts')

const index = async (req, res)=>{
    const posts = await postsBusinnes.getPosts() 

    return res.json(posts)
}

module.exports ={
    index,
}