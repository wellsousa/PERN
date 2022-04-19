const express = require('express')
const cors = require('cors')
const pool = require('./db/connection')

const app = express()

//middleware
app.use(cors())
app.use(express.json())


app.post('/todos',async (req, res)=> {
    try{
        //console.log(req.body)
        //console.log('entrou aqui')

        const {label, description, cod_priority} = req.body
        const newTodo = await pool.query(`INSERT INTO TTodo(label, description, cod_priority) VALUES('${label}', '${description}', ${cod_priority}) RETURNING *`)
        
        res.json(newTodo.rows[0])
        //console.log(todo.command)
        /*
        *INFORMAÇÕES IMPORTANTES
            todo.command
            todo.rowCount
            todo.rows //array de linhas como resultado
        */
    }catch(err){
        console.log(err.message)
    }
})

app.get('/todos', async (req, res)=> {
    console.log('entrou em listTodos')
    try{
        const listTodos = await pool.query('SELECT * FROM TTodo')
        res.json(listTodos.rows)
    }catch(err){
        console.log(err.message)
    }
})

app.get('/todo/:id', async(req, res)=>{
    try{
        const {id} = req.params
        const todo = await pool.query(`SELECT * from TTodo WHERE id=${id}`)
        res.json(todo.rows[0])
    }catch(err){
        console.log(err.message)
    }
})

app.put('/todo/:id', async(req, res)=> {
    console.log(req.body)
    try{
        const {id} = req.params 
        const {description, cod_priority} = req.body
        const updatedTodo = await pool.query(`UPDATE TTodo 
                                                 SET 
                                                  description='${description}',
                                                  cod_priority=${cod_priority} 
                                                WHERE 
                                                    id=${id} RETURNING *`)
        res.json(updatedTodo.rows[0])
    }catch(err){
        console.log(err.message)
    }
})

app.delete('/todo/:id', async (req, res)=>{
    try{
        const {id} = req.params
        const deletedTodo = await pool.query(`DELETE FROM TTodo WHERE id=${id}`)

        res.json(deletedTodo.rows)
    }catch(err){
        console.error(err.message)
    }
})

app.listen(5000, ()=>{
    console.log('server started at port 5000')
})