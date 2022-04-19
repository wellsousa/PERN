const Pool = require('pg').Pool
const pool = new Pool({
    //user: 'postgres',
    //password: 'workspace',

    //user: 'doko',
    //password: '1234',

    user: 'crypto',
    password: 'crypto',

    host: 'localhost',
    database: 'crypto-test',
    
    
    port: 5432,
})

const getProducts = ()=>{
    return new Promise(function(resolve, reject){
        pool.query('SELECT * FROM TProduct ORDER BY ID ASC', (error, results)=>{
            if(error)
            {
                reject(error)
            }

            resolve(results.rows)
        })
    })
}

const createProduct = (body) =>{
    return new Promise(function(resolve, reject){
        const {id, name, price} = body
        console.log('id: ' + id)
        console.log('name: ' + name)
        console.log(`INSERT INTO TProduct(id, name, price) VALUES(${id},'${name}', ${price}) RETURNING *`)
        pool.query(`INSERT INTO TProduct(id, name, price) VALUES(${id},'${name}', ${price})`, (error, results)=>{
            if(error){
                console.log(error)
                reject(error)
            }

            console.log(results.rows)
            resolve(`novo produto foi adicionado: ${results}`)
        })
    })
}

const deleteProduct = (id) =>{
    return new Promise(function(resolve, reject){
        const _id = parseInt(id)

        pool.query(`DELETE FROM TProduct WHERE id=${_id}`, (error, results)=>{
            if(error){
                reject(error)
            }

            resolve(results)
        })
    })
}

module.exports = {
    getProducts,
    createProduct,
    deleteProduct,
}