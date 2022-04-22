
const pool = require('../../db/config/connection')


const getPosts= async () =>{

    let posts = []
    try{
        posts = await pool.query('SELECT * FROM blog.posts')
    }catch(err){
        console.log(err.message)
    }

    return posts
}

const savePost= async (post)=>{

    const {title, content} = post
    let newPost

    try{
        newPost = await pool.query(`INSERT INTO blog.posts (title, content) VALUES('${title}', '${content}') RETURNING *`)
    }catch(err){
        console.log(err.message)
    }

    return newPost
}

const deletePost = async (id) =>{
    let deletedPost = []
    try{
        deletedPost = await pool.query(`DELETE FROM blog.posts WHERE id=${id}`)
    }catch(err){
        console.error(err.message)
    }

    return deletedPost
}

module.exports={
    getPosts,
    savePost,
    deletePost,
}