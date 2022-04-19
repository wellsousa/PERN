
const express = require('express')
const app = express()
const port = 3001

const ProductModel = require('./productModel')

app.use(express.json())

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();
  });

app.get('/', (req, res)=> {
    //res.status(200).send('hello world postgres')
    ProductModel.getProducts()
    .then(response => {
        res.status(200).send(response)
    })
    .catch( error => {
        res.status(500).send(error)
    })
})


app.post('/products', (req, res)=>{
    //console.log(req)
    ProductModel.createProduct(req.body)
    .then(response =>{
        res.status(200).send(response)
    })
    .catch(error => {
        res.status(500).send(error)
    })
})

app.delete('/products/:id', (req, res)=>{
    ProductModel.deleteProduct(req.params.id)
    .then(response => {
        res.status(200).send(response)
    })
    .catch(error => {
        res.status(500).send(error)
    })
})

app.listen(port, ()=>{
    console.log(`App running on port ${port}.`)
})