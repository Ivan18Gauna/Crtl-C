 const axios = require('axios')
 const productos = require('./products.json')
 const e = require('express')
 const {Productos} = require('../db')

const getProducts = async (req, res) => {
    console.log(productos)
    res.status(200).send(productos)
}

module.exports = {
    getProducts
}