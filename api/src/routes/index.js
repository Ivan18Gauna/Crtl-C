const axios = require('axios')
const { Router } = require('express');
require('dotenv').config();
const {Productos} = require('../db')
const {getProducts, createProduct, getAll, getByName} = require('../controllers/utils')

const router = Router();

router.get('/products', getProducts)

router.get('/all', getAll)

router.get('/products/:name', getByName)

router.post('/agregarProducto', createProduct)



module.exports = router;
