
const pool = require('../../db/config/connection')


const getPosts= async () =>{
    return await pool.query('SELECT * FROM blog.post')
}

module.exports={
    getPosts,
}