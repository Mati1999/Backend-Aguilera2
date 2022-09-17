const express = require('express')
// import express from 'express'
const app = express();
const Ecommerce = require('./ecommerce.js')
// import Ecommerce from './ecommerce.js'

app.use(express.json())

const ecommerce = new Ecommerce()
app.post('/add',(req,res) => {
    let carrito = ecommerce.addProd(req.body)
    res.send(carrito);
});

app.post('/update',(req,res) => {
    let producto = ecommerce.updateProd(req.body)
    res.send(producto);
});

app.delete('/delete',(req,res) => {
    let carrito = ecommerce.deleteProd(req.body.id)
    console.log(req.body.id);
    res.send(carrito);
});

app.listen(8080,() => {
    console.log(`Conectado en el puerto 8080`);
})

module.exports = app