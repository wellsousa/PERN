const express = require('express')
const app = express()


/*
middlewares
*/
app.use(express.json())
app.use('/', require('./src/api/routes/posts'))


app.listen(5001, ()=>{
    console.log('running at port 5001')
})