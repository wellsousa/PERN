
const pool = require('../../db/config/connection')


const getPosts= async () =>{

    let res = []
    try{
        res = await pool.query('SELECT * FROM blog.posts')
    }catch(err){
        //console.log(err.message)
    }

    return res
}

const savePost= async (post)=>{
    
    let res = []
    const {title, content} = post
    
    try{
        res = await pool.query(`INSERT INTO blog.posts (title, content) VALUES('${title}', '${content}') RETURNING *`)
    }catch(err){
        console.log(err.message)
    }

    return res
}

const deletePost = async (id) =>{
    let res = []
    try{
        res = await pool.query(`DELETE FROM blog.posts WHERE id=${id}`)
    }catch(err){
        console.error(err.message)
    }

    return res
}

module.exports={
    getPosts,
    savePost,
    deletePost,
}