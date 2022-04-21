const express = require('express')
const app = express()

app.get('/', ()=>{
    console.log('hello')
})

app.listen(5001)