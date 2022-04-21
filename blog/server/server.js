const express = require('express')
const app = express()

app.use('/', require('./src/api/routes/posts'))


app.listen(5001)